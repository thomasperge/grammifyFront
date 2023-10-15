import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  constructor(private router: Router) { }

  redirectToLoginPage() {
    this.router.navigate(['/login'])
  }
}
