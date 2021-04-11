import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  constructor(public api2:ApicallService) { }

  ngOnInit() {
  }
    saveuser(values){

      this.api2.registeruser(values).subscribe(
        (res)=>{
          console.log(res);
          if(res["status"]== 1){
            alert("success : please login !");
          }
          else if(res["status"]== 2){
            alert("failed ");}
          else{
            alert("already exist ");
          }
        }
        );

    }
  
}
