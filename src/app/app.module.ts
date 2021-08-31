import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { Page404Component } from './page404/page404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 *  Main Routes for app to navigate in Modules Module
 */

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
