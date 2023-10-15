import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  activePageClass: any = 'gray';
  login: String | undefined = "Get Started";

  constructor(private router: Router, private usersService: UsersService) {
    this.usersService.email$.subscribe(email => {
      if(email) {
        this.login = "👤 Profile";
      } else {
        this.login = "🚀 Get Started"
      }
    });
  }

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

  redirectToLoginPage() {
    if (!this.usersService.getUserId()) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/profil']);
    }
  }

  redirectToTwitterPage() {
    window.open('https://twitter.com/home', '_blank');
  }
}
