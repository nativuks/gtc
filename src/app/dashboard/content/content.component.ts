import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'gtc-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {
  userList: any[] = [];
  userListSubscription: Subscription;
  constructor(private userService: UserService) {
    this.userListSubscription = new Subscription();
  }

  ngOnInit() {
    this.userListSubscription = this.userService.getUserList().subscribe((response) => {
      if (response.json().status === 'ok') {
        this.userList = response.json().result;
      }});

/*    this.userListSubscription = this.userService.getUserList().subscribe((response) => {
      console.log('UserList', response);
      if(response) {
        this.userList = response;
        console.log('UserList', this.userList);
      }
    });*/
  }
  ngOnDestroy() {
    this.userListSubscription.unsubscribe();
  }

}
