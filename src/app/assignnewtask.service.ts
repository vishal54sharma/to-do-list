import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alltasklist } from 'src/assets/data/alltasklist';


@Injectable({
  providedIn: 'root'
})
export class AssignnewtaskService {
  _alltasklist:Alltasklist;
  
  previousTaskList:any=[];
 
  constructor(private http : HttpClient) { 
    
  }

  fetchListedTask(newtasklist:any)
  {
    this._alltasklist=new Alltasklist();
     this._alltasklist.alltasklist.push(newtasklist);
    return JSON.stringify(this._alltasklist);
    
  }
}
