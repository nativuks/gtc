import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';

@Injectable()
export class BaseService {
  protected baseUrl = 'assets/Json';
  protected url = '';
  constructor(protected http: Http) { }

  protected defaultHeader(): Headers {
    // create authorization header with jwt token
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    return headers;
  }

  // private helper methods
  protected jwt() {
    // create authorization header with jwt token
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new Headers();
    if (currentUser && currentUser.token) {
      headers.append('Authorization', 'Bearer ' + currentUser.token);
    }
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
   // return new RequestOptions({ headers: headers });
  }

}
