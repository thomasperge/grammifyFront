import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  isHomePage() {
    return this.router.url.startsWith('/translator') || this.router.url.startsWith('/reformulate') || this.router.url.startsWith('/spell-checker')
  }

  isAboutPage() {
    return this.router.url === '/about';
  }

  isPricingPage() {
    return this.router.url === '/pricing';
  }

  isTwitterPage() {
    return this.router.url === '/twitter';
  }

  redirectToHomePage() {
    this.router.navigate(['/translator']);
  }

  redirectToAboutPage() {
    this.router.navigate(['/about']);
  }

  redirectToPricingPage() {
    this.router.navigate(['/pricing']);
  }

  redirectToTwitterPage() {
    this.router.navigate(['/twitter']);
  }
}
