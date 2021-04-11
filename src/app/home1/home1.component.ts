import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  constructor() { }
  title="mypage"
  title1="homepage"

  ngOnInit(): void {
  }
  clickme(){
    alert(this.title)
  }
  isdata = true
  employee = [{
    'name':'wamiq',
    'age':1,
    'salary': 20000,
  }
]

}
