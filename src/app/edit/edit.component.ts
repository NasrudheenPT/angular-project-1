import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { CommunicateService } from '../communicate.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public api:ApicallService ,public obj:CommunicateService) { }
  
  email:string;
  ngOnInit(){
    this.email=this.obj.email
    this.api.edit(this.email).subscribe(
      (data)=>{
        console.log(data)
      }







    )
  }



}

