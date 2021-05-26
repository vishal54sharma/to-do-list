import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { newTaskModel } from 'model/newtaskmodel';
import { AssignnewtaskService } from '../assignnewtask.service';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  
  public newtasklist:newTaskModel;
  public servertasklist:string;
  public newtaskflag:boolean=false;
  constructor(private fb:FormBuilder, private _assignnewtask:AssignnewtaskService, private _dataservice:DataServiceService) {
   
   }

    taskForm=this.fb.group({
    taskName:['',[Validators.required,Validators.minLength(4)]],
    targetDate: ['', Validators.required],
    taskRemark:['',[Validators.minLength(10)]],
  });  
  ngOnInit(){

  }
  get taskName()
  {
    return this.taskForm.get('taskName');
  }
  get targetDate()
  {
    return this.taskForm.get('targetDate');
  }      
  get taskRemark()
  {
    return this.taskForm.get('taskRemark');
  }
  onSubmit(taskname: string, targetdate: string, remark: string)
  {
   this.newtasklist=new newTaskModel();
   this.newtasklist.setNewTaskFields(taskname,targetdate,remark);
   this.servertasklist=this._assignnewtask.fetchListedTask(this.newtasklist);  // servertasklist=string
   this._dataservice.changeMessage(this.servertasklist);
   this.taskForm.reset();
   //console.log(this.servertasklist);
   this.newtaskflag=true;
  }
   
  
  newTaskFlagSetter(){
    this.newtaskflag=false;
  }
}
