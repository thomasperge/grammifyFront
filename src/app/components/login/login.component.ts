import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { UsagesService } from 'src/app/services/usages.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  envUrl: any;
  displayErrorMessage: String | undefined;

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder, private usersService: UsersService, private usagesService: UsagesService) { }

  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });

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

    const uri = environment.apiURL + "/users/login"
    
    this.http.post<any>(uri, formData, { headers, observe: 'response' })
      .subscribe(response => {
        
        if (response.status === 200) {
          this.usersService.setUserIdLocalStorage(response.body)
          this.usagesService.setMaxUsages(response.body.user.maxUsages)
          this.router.navigate(['/home']);
        } else {
          this.displayErrorMessage = "*Incorrect email or password"
        }
      }, error => {
          this.displayErrorMessage = "*Incorrect email or password"
      });
  }
}
