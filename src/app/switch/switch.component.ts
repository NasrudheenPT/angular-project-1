import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  day:string;
  num = 1234.234567;
  da = new Date();
  msg ='hello welcome'
  constructor() { }


  ngOnInit(): void {
  }
  clickme(){
    let a=(document.getElementById("inp")as HTMLInputElement).value;
    this.day=a;
  }
 
}
