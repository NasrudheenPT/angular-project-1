import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeftComponent } from './left/left.component';
import { CenterComponent } from './center/center.component';
import { RightComponent } from './right/right.component';
import { FooterComponent } from './footer/footer.component';
import { Home1Component } from './home1/home1.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';
import { SwitchComponent } from './switch/switch.component';
import { SqrtPipe } from './sqrt.pipe';
import { ReversePipe } from './reverse.pipe';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { FormComponent } from './form/form.component';
import { FormatingComponent } from './formating/formating.component';
import { FormatingNumComponent } from './formating-num/formating-num.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftComponent,
    CenterComponent,
    RightComponent,
    FooterComponent,
    Home1Component,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    ListComponent,
    TableComponent,
    SwitchComponent,
    SqrtPipe,
    ReversePipe,
    TwowaybindingComponent,
    FormComponent,
    InputComponent,
    OutputComponent,
    FormatingComponent,
    FormatingNumComponent,
    UserComponent,
    RegisteruserComponent,
    LoginComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
