import { Component, OnInit } from '@angular/core';
import {SigInModel} from '../../shared/models/login/sig-in';
import {Router} from '@angular/router';

@Component({
  selector: 'gtc-sig-in',
  templateUrl: './sig-in.component.html',
  styleUrls: ['./sig-in.component.css']
})
export class SigInComponent implements OnInit {
  login: SigInModel;
  userName = '';
  password = '';

  constructor(private router: Router) {
    this.login = new SigInModel();
  }

  ngOnInit() {
  }
  onSigIn(userName: string, password: string) {
    if(userName !== undefined && password !== undefined){
      this.login.userName = userName;
      this.password = password;
      console.log('Login', this.login);
      this.router.navigate(['/dashboard']);
    }
    console.log('On Login', userName, password);
  }

}
