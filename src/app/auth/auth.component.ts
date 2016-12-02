import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from './auth.service';

import { Alert } from '../models/alert';

@Component({
  templateUrl: "./auth.component.html",
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  public alerts: Array<Alert> = [];

  private networkError: string = '0 -  {"isTrusted":true}';

  public message: string;

  public username: string;
  public password: string;



  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();

    // Get the redirect URL from our auth service
    // If no redirect has been set, use the default
    let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/login';

    // Redirect the user
    this.router.navigate([redirect]);
  }
  public setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  public login() {
    this.message = 'Trying to log in ...';
    this.authService.login(this.username, this.password, 'localhost')
      .subscribe(
      valid => {
        this.setMessage();

        this.authService.isLoggedIn = valid;
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/login';
        // Redirect the user
        this.router.navigate([redirect]);
      }, error => {
        this.alerts.push({
          id: 1,
          type: 'danger',
          message: error == this.networkError ? 'Le serveur ne répond pas !' : error
        })
      }
      );


  }
  public logout() {
    this.authService.logout();
    this.setMessage();
  }

  public closeAlert(alert: Alert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}
