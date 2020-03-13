import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-child',
  templateUrl: './product-child.component.html',
  styleUrls: ['./product-child.component.css']
})
export class ProductChildComponent implements OnInit {
//parent to child
 @Input() parentData:string;

//child to parent
@Output() childEvent=new EventEmitter<string>();
onChange(value:string){
  this.childEvent.emit(value);
}

  constructor() { }

  ngOnInit(): void {
  }

}
