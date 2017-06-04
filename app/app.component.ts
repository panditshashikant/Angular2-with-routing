import { Component} from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
 <div class="container" style="margin-top:50px;">
    <nav>
      <a routerLink="/home" class="btn btn-primary" routerLinkActive="active">home</a>
      <a routerLink="/about" class="btn btn-primary" routerLinkActive="active">About US</a>
    </nav>
   <br/>
   <div style="border: 1px solid;height:300px;padding:20px;width:80%;"> 
    <router-outlet></router-outlet>
    </div>
   </div>
    `
})
export class AppComponent {
  title = 'Angular 2 Assignment';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/