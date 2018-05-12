import { Component, OnInit } from '@angular/core';
import {SigInModel} from '../../shared/models/login/sig-in';
import {Router} from '@angular/router';
import {UserService} from '../../shared/services/user.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'gtc-sig-in',
  templateUrl: './sig-in.component.html',
  styleUrls: ['./sig-in.component.css']
})
export class SigInComponent implements OnInit {
  login: SigInModel;
  currentUser: SigInModel;
  userName = '';
  password = '';
  userLoginSubscription: Subscription;

  constructor(private router: Router,
              private userService: UserService) {
    this.login = new SigInModel();
    this.currentUser = new SigInModel();
    this.userLoginSubscription = new Subscription();
  }

  ngOnInit() {
  }
  onSigIn(userName: string, password: string) {
    console.log('Datos de usuario', userName, password);
    if(userName !== undefined && password !== undefined &&
      userName !== '' && password !== '') {
      this.login.userName = userName;
      this.login.password = password;
      console.log('Login', this.login);
      this.userLoginSubscription = this.userService.login(this.login).subscribe((response) => {
        console.log('Login', response.json());
        if (response.json()['result'] !== null) {
          this.userService.setUserInformation(this.login);
          this.router.navigate(['/dashboard']);
        }
      });


    }

  }

}
