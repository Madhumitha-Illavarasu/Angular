import { Component, OnInit } from '@angular/core';
import { DateTimeService } from '../date-time.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private service:DateTimeService) { }
  currentDate;
  ngOnInit(): void {
    this.currentDate=this.service.currentDate();
  }

}






