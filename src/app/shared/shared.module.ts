import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { LoginModule } from '../login/login.module';
import { UserService } from './services/user.service';
import { AccidentsService } from './services/accidents.service';
import { BaseService } from './services/base.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    LoginModule,
    HttpModule
  ],
  declarations: [],
  exports: [],
  providers: [UserService, AccidentsService]
})
export class SharedModule { }
