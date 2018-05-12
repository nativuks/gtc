import { Injectable } from '@angular/core';
import {SigInModel} from '../models/login/sig-in';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';
import {BaseService} from './base.service';
import {environment} from '../../../environments/environment.prod';

@Injectable()
export class UserService  {
  private  url = 'http://localhost:8080/';
  private userInformation = new BehaviorSubject<SigInModel>(null);
  constructor(private http: Http) {
    //this.baseUrl = environment.resource;
  }

  setUserInformation(user: SigInModel) {
   this.userInformation.next(user);
  }
  getUserInformation(): Observable<SigInModel> {
    return this.userInformation.asObservable();

  }
  getUserList(): Observable<any> {
    return this.http.get(`${this.url}users/`);
  }
  login(userLogin: SigInModel): Observable<any> {
    return this.http.post(`${this.url}users/login`, userLogin);
  }
}
