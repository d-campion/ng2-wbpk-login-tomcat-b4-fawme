import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AuthRoutingModule }   from './auth/auth-routing.module';
import { AuthComponent } from './auth/auth.component';

//import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    JsonpModule,

    AppRoutingModule,
    AuthRoutingModule
  ],
  declarations: [
    AppComponent,
    AuthComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
