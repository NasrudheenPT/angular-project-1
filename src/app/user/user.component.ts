import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { CommunicateService } from '../communicate.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public api1: ApicallService,public obj:CommunicateService) { }
  postdata: any;
  result: object[] = [];
  ngOnInit() {
    this.api1.getuser().subscribe(
      (res) => {
      console.log(res);
      for (let x in res) {
        for (let y in res[x]) {
          this.result.push(res[x][y]);

        }
      }
      this.postdata = res;
    })
  }

 clickme(email){
   this.obj.setmailid(email)


 } 

}
