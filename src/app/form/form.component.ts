import { Component, OnInit } from '@angular/core';
import { AsyncValidator } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form1:any;
  constructor() { }
 
  senddata(val:any){
    this.form1=val;
  }

  ngOnInit(): void {
  }

}
