import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { UsagesService } from 'src/app/services/usages.service';
import { EnvironnementService } from 'src/app/services/environnement.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  envUrl: any;
  displayErrorMessage: String | undefined;
  isLoading: boolean = false;

  constructor(private environnementService: EnvironnementService, private router: Router, private http: HttpClient, private formBuilder: FormBuilder, private usersService: UsersService, private usagesService: UsagesService) { }

  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  redirectToSignupPage() {
    this.router.navigate(['/signup']);
  }

  onSubmit() {
    this.isLoading = true;

    // Get form data
    const formData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const uri = this.environnementService.getUrlBackend() + "/users/login"
    
    this.http.post<any>(uri, formData, { headers, observe: 'response' })
      .subscribe(response => {
        
        if (response.status === 200) {
          this.usersService.setUserIdLocalStorage(response.body)
          this.usagesService.setMaxUsages(response.body.user.maxUsages)
          
          this.isLoading = false;
          this.router.navigate(['/home']);
        } else {
          this.isLoading = false;
          this.displayErrorMessage = "*Incorrect email or password"
        }
      }, error => {
          this.isLoading = false;
          this.displayErrorMessage = "*Incorrect email or password"
      });
  }
}
