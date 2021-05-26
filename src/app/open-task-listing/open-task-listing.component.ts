import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { ClosetaskdataService } from '../closetaskdata.service';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-open-task-listing',
  templateUrl: './open-task-listing.component.html',
  styleUrls: ['./open-task-listing.component.css']
})
export class OpenTaskListingComponent implements OnInit {

  public returnedfreshtasklist:string;
  public freshtasks:any;
  public closetasks:any=[];
  public tempbuffer:any[];
  subscription:Subscription;
  public isShown:boolean;
  constructor(private _dataservice:DataServiceService,private _router:Router, private _closedtaskservice:ClosetaskdataService) { }
  

  ngOnInit(): void {
    this.subscription=this._dataservice.currentMessage.subscribe(message=> this.returnedfreshtasklist=message);
    //console.log("this is: "+JSON.parse(this.returnedfreshtasklist));
    console.log(this.returnedfreshtasklist);
    
    try{this.freshtasks=JSON.parse(this.returnedfreshtasklist);}
    catch(error){
      console.log(this._router.navigate(['/new-task-create']));
    }
    //console.log(this.freshtasks.alltasklist[0].taskname);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  closeTask(taskname:string)
  {
      for(let i=0;i<this.freshtasks.alltasklist.length;i++)
      {
        if(this.freshtasks.alltasklist[i].taskname==taskname)
        {
          console.log("fount at inded "+i);
          //delete this.freshtasks.alltasklist[i];
          this.freshtasks.alltasklist[i].taskcompletiondate=new Date();
          this.tempbuffer=this.freshtasks.alltasklist[i];
          this.closetasks.push(this.tempbuffer);
          this._closedtaskservice.changeMessage(JSON.stringify(this.closetasks));
          this.freshtasks.alltasklist.splice(i,1);
          this._dataservice.changeMessage(JSON.stringify(this.freshtasks));
          this.subscription=this._dataservice.currentMessage.subscribe(message=> this.returnedfreshtasklist=message);     
          this.freshtasks=JSON.parse(this.returnedfreshtasklist);
          console.log(this.closetasks);
          break;
        }
      }
      console.log("after deletion: "+this.freshtasks.alltasklist);
  }


  editAndSaveTask(tochecktask:string, edittask:string, edittasktargetdate:string, edittaskremark:string)
  {
    console.log(tochecktask +" , " +typeof(tochecktask));
    for(let i=0;i<this.freshtasks.alltasklist.length;i++)
    {
      if(this.freshtasks.alltasklist[i].taskname.toString().trim()==tochecktask.toString().trim())
      {
         console.log("entered");
        //delete this.freshtasks.alltasklist[i];
        this.freshtasks.alltasklist[i].taskname=edittask;
        this.freshtasks.alltasklist[i].taskremark=edittaskremark;
        this.freshtasks.alltasklist[i].tasktargetdate=edittasktargetdate;
        this._dataservice.changeMessage(JSON.stringify(this.freshtasks));
        this.subscription=this._dataservice.currentMessage.subscribe(message=> this.returnedfreshtasklist=message);
        
        this.freshtasks=JSON.parse(this.returnedfreshtasklist);
        this.isShown=true;
        break;
      }
     
    }
    console.log(this.freshtasks.alltasklist);

  }


}
