import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  envUrl: any;
  displayErrorMessage: String | undefined;

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder, private usersService: UsersService) {
    this.loadConfig()
  }

  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  async loadConfig() {
    try {
      const config = await import('./../../../../env.json');
      this.envUrl = config.url_backend;
    } catch (error) {
      console.error('Error loading env file :', error);
    }
  }

  redirectToSignupPage() {
    this.router.navigate(['/signup']);
  }

  onSubmit() {
    // Get form data
    const formData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const uri = this.envUrl + "/users/login"
    
    this.http.post<any>(uri, formData, { headers, observe: 'response' })
      .subscribe(response => {
        
        if (response.status === 200) {
          this.usersService.setUserIdLocalStorage(response.body)
          this.router.navigate(['/home']);
        } else {
          this.displayErrorMessage = "*Incorrect email or password"
        }
      }, error => {
          this.displayErrorMessage = "*Incorrect email or password"
      });
  }
}
