import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formating-num',
  templateUrl: './formating-num.component.html',
  styleUrls: ['./formating-num.component.css']
})
export class FormatingNumComponent implements OnInit {
  num = 1234.234567;
  da = new Date();
  msg ='hello FRIENDS'
  constructor() { }

  ngOnInit(): void {
  }

}
