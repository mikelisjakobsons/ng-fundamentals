import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <img src="/assets/images/basic-shield.png" width="40" />
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  //title = 'app';
}
