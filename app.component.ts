import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Learn angular';
  
  childData:string
  catchChildEvent($event){
    this.childData=$event;
  }
  
  // hobbie=[];
  // num_val=13;
  // static sval=10;
  // storeNum():void{
  //   var local_num=14;
  //   console.log("local num"+local_num);
  // }
  // constructor(){
  //   this.hobbie=['singing','cooking','dancing'];
  //   console.log(AppComponent.sval);
  //   console.log(this.num_val);

  //   this.storeNum();
  // }
  // val = "environmental";
  // val1 = "science";
  // concat(): void {
  //   console.log(this.val.concat(this.val1));
  // }
  // index():void{
  //   console.log(this.val.indexOf('a'));
  // }
  // find():void{
  //   console.log(this.val.charAt(11));
  // }

  // constructor() {
  //   this.concat();
  //   this.index();
  //   this.find();
  // }




}




