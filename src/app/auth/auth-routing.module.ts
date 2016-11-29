import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AuthGuard }      from '../auth-guard/auth-guard.service';
import { AuthService }    from './auth.service';

import { AuthComponent }  from './auth.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: AuthComponent }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AuthRoutingModule {}
