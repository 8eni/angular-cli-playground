import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  	<ul>
  	<li><a routerLink="/">Home</a></li>
  	<li><a routerLink="/about">About</a></li>

  	</ul>
	<router-outlet></router-outlet>
  `
})
export class AppComponent {
  
}
