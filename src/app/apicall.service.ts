import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http:HttpClient) { }
  getuser(){
    return this.http.get("http://beyont.in/angularapi/getuser.php")
  }
  registeruser(params){
    return this.http.get("http://beyont.in/angularapi/registration.php",{params});
  }
  login(params){
    return this.http.get("http://beyont.in/angularapi/login.php",{params});
  }
  edit(params){
    return this.http.get("http://beyont.in/angularapi/updateuser.php",{params});
  }
  
  delete(params){
    return this.http.get("http://beyont.in/angularapi/deleteuser.php",{params});
  }
}
