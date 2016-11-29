import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../models/user';

import '../../../public/css/styles.css';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public user: User;

  constructor(public authService: AuthService, public router: Router) {

    // this language will be used as a fallback when a translation isn't found in the current language
    //translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    //translate.use('en');

    this.user = this.authService.user;
    // Get the redirect URL from our auth service
    // If no redirect has been set, use the default
    let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/login';

    // Redirect the user
    this.router.navigate([redirect]);
  }
}
