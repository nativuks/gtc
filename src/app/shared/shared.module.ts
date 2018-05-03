import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { LoginModule } from '../login/login.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    LoginModule
  ],
  declarations: [],
  exports: []
})
export class SharedModule { }
