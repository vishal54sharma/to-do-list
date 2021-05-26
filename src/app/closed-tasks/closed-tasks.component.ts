import { Component, OnInit } from '@angular/core';
import { ClosetaskdataService } from '../closetaskdata.service';


@Component({
  selector: 'app-closed-tasks',
  templateUrl: './closed-tasks.component.html',
  styleUrls: ['./closed-tasks.component.css']
})
export class ClosedTasksComponent implements OnInit {
  public returnedClosedTasks:string;
  public closedtasks:any=[];
  constructor(private _closetaskdataservice:ClosetaskdataService) { 
    
  }

  ngOnInit(): void {
    this._closetaskdataservice.currentMessage.subscribe(message => this.returnedClosedTasks=message);
    try{
      this.closedtasks=JSON.parse(this.returnedClosedTasks);
      console.log(this.closedtasks);
    }
    catch(error){
      console.log("some error occured "+error);
    }
  }

}
