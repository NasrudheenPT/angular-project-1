import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicateService {
email:string;
  constructor() {

   }
   setmailid(email){
     this.email=email
     
   }


}
