import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  constructor() { }

  currentDate(){
  let todayDate=new Date();
  return todayDate;
}

}