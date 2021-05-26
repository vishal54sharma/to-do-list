import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClosetaskdataService {
  public messageSource= new BehaviorSubject("default message");
  public currentMessage=this.messageSource.asObservable();
  constructor() { }

  

  public changeMessage(message:string)
  {
    this.messageSource.next(message);
  }
}
