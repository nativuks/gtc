import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {SigInModel} from '../shared/models/login/sig-in';
import {Subscriber} from 'rxjs/Subscriber';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'gtc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userLogin: SigInModel;
  userInformatioSubscribe: Subscription;
  constructor(private userService: UserService) {
    this.userInformatioSubscribe = new Subscription();
  }
  ngOnInit() {
/*    this.userInformatioSubscribe = this.userService.getUserList().subscribe((response) => {
      if (response !== null || response !== undefined) {
        this.userLogin = response;

      }
    });*/
  }

}
