import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public api3:ApicallService,public route:Router) { }

  ngOnInit() {
  }
  loginpage(data){
    this.api3.login(data).subscribe(
      (res)=>{
        console.log(res);
        if(res["status"]== 1){
          alert("success ");
          this.route.navigate(['/login']);
        }
        else if(res["status"]== 2){
          alert("failed ");}
        else{
          alert("not exist ");
        }
        

          
         
        
        }
      
    );

  }

}
