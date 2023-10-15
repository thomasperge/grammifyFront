import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UnknownUserService } from 'src/app/services/unknown-user.service';
import { UsersService } from 'src/app/services/users.service';
import { UsagesService } from 'src/app/services/usages.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  envUrl: any;
  displayErrorMessage: String | undefined;

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder, private unknownUserService: UnknownUserService, private usersService: UsersService, private usagesService: UsagesService) {
    this.loadConfig()
  }
  
  signupForm = this.formBuilder.group({
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

  redirectToLoginPage() {
    this.router.navigate(['/login']);
  }

  onSubmit() {
    // Get unknown id
    const userId = localStorage.getItem('unknownId');

    // Get form data
    const formData = {
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      unknown_id: this.unknownUserService.getUnknownUserId()
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const uri = this.envUrl + "/users/signup"
    
    this.http.post<any>(uri, formData, { headers, observe: 'response' })
      .subscribe(response => {

        if (response.status === 200) {
          this.usersService.setUserIdLocalStorage(response.body)
          this.usagesService.setMaxUsages(response.body.user.maxUsages)
          this.usagesService.setUsages(response.body.user.currentUsages)
          this.usersService.setUserEmail(response.body.user.email)
          
          console.log("SIGNUP SUBMIT COMPONENT");
          this.router.navigate(['/home']);
        } else {
          this.displayErrorMessage = "*Email already in use"
        }
      }, error => {
          this.displayErrorMessage = "*Email already in use"
      });
  }
}
