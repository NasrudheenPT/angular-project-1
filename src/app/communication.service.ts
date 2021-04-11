import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
inp1:any;
  constructor() {

   }
   student = [{
    'slno':'4001',
    'name':'wamik',
    'mark1':33,
    'mark2':99,
    'mark3':78,

  },
  {
  'slno':'4002',
  'name':'laiqa',
  'mark1':33,
  'mark2':89,
  'mark3':28,

},
{
  'slno':'4003',
  'name':'molu',
  'mark1':33,
  'mark2':68,
  'mark3':28,

},
{
  'slno':'4005',
  'name':'sithu',
  'mark1':63,
  'mark2':69,
  'mark3':38,

},
]
clickme(x:any){
  var n = x.mark1+x.mark2+x.mark3
  alert("Total  Mark is:" +n)
}
clickmee(){
  let a=(document.getElementById("input")as HTMLInputElement).value;
  this.inp1=a;
}


}


