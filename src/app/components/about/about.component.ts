import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  login: String | undefined;

  constructor(private router: Router, private usersService: UsersService) {
    this.usersService.email$.subscribe(email => {
      if(email) {
        this.login = "👤 Profile";
      } else {
        this.login = "🚀 Get Started"
      }
    });
  }

  redirectToLoginPage() {
    if (this.usersService.getUserId()) {
      this.router.navigate(['/profil']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
