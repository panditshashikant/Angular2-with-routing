import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: 'app/about/about.component.html'
})
export class AboutComponent {
  about = new About();
  constructor() { }

  getContactDetail() {
    this.about.Name= "Deepak Chauhan";
    this.about.Phone= "9090909090";
  }
}
export class About {
  Name: string;
  Phone: string;
}
