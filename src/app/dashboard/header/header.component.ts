import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {SigInModel} from '../../shared/models/login/sig-in';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'gtc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userLogin: SigInModel;
  userInformatioSubscription: Subscription;
  constructor(private userService: UserService) {
    this.userInformatioSubscription = new Subscription();
  }

  ngOnInit() {
    this.userInformatioSubscription = this.userService.getUserInformation().subscribe((response) => {
      if(response) {
        this.userLogin = response;
      }
    });
  }

  ngOnDestroy() {
    this.userInformatioSubscription.unsubscribe();
  }

}
