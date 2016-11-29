import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Credential } from '../models/credentials';

import { User } from '../models/user';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

  public isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  public redirectUrl: string;

   public user: User;

  constructor(private http: Http) { }

  public login(usr: string, pwd: string, server: string) {

    let credential: Credential= {
      username: usr,
      password: pwd
    };

     return this.http.post("http://"+ server+":8090/angular/rest/users/authenticate",credential).map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  public logout(): void {
    this.isLoggedIn = false;
  }
}