import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent }  from './app.component';
import { routing }     from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';

@NgModule({
   imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/