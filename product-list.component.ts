import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
// title="Product-title";
// name="Madhumitha";
// address="Ambattur";
// logo="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg";
isAvailable=false
mybutton=false
secondButton=false
name="madhu"         
phoneNum=98765
location="Chennai"                                               
buttonClick(){
 this.mybutton=true; 
}
buttondouble(){
  this.mybutton=false;
}
  constructor() { }

  ngOnInit(): void {
  }

}
