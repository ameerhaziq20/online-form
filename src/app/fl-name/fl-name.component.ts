import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fl-name',
  templateUrl: './fl-name.component.html',
  styleUrls: ['./fl-name.component.css']
})
export class FlNameComponent implements OnInit {

  public userinFN = "";
  public firstName = "" ;
  public lastName = "";
  public email = "";

  constructor() { }

  ngOnInit(): void {
  }

getValueFN(val:string){
  console.warn(val);
  this.firstName = val;
  }
getValueLN(val:string){
  console.warn(val);
  this.lastName=val;
}
getValueEM(val:string){
  console.warn(val);
  this.email=val;
}

}



