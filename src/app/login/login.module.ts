import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {LoginComponent} from './login.component';
import { RegisterComponent } from './register/register.component';
import { SigInComponent } from './sig-in/sig-in.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent, SigInComponent]
})
export class LoginModule { }
