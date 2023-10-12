import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GrammifyFront';
  isDisplayNavBar = true;

  constructor(private router: Router) {
    // Check all changement route
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;
        // Undisplay navbar if /login or /signup route
        if (currentRoute == "/login" || currentRoute == "/signup") {
          this.isDisplayNavBar = false
        }
      }
    });
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
