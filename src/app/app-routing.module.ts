import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { FormatingNumComponent } from './formating-num/formating-num.component';
import { FormatingComponent } from './formating/formating.component';
import { Home1Component } from './home1/home1.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { OutputComponent } from './output/output.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { SwitchComponent } from './switch/switch.component';
import { TableComponent } from './table/table.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:'home1',component:Home1Component},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'list',component:ListComponent},
  {path:'table',component:TableComponent},
  {path:'switch',component:SwitchComponent},
  {path:'twoway',component:TwowaybindingComponent},
  {path:'input',component:InputComponent},
  {path:'output',component:OutputComponent},
  {path:'form',component:FormComponent},
  {path:'formating',component:FormatingComponent},
  {path:'formatingnum',component:FormatingNumComponent},
  {path:'user',component:UserComponent},
  {path:'registeruser',component:RegisteruserComponent},
  {path:'login',component:LoginComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
