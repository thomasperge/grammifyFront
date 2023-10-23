import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UnknownUserService } from 'src/app/services/unknown-user.service';
import { UsersService } from 'src/app/services/users.service';
import { UsagesService } from 'src/app/services/usages.service';
import { EnvironnementService } from 'src/app/services/environnement.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup;
  envUrl: any;
  displayErrorMessage: String | undefined;
  isLoading: boolean = false;

  constructor(private environnementService: EnvironnementService, private router: Router, private http: HttpClient, private formBuilder: FormBuilder, private unknownUserService: UnknownUserService, private usersService: UsersService, private usagesService: UsagesService) {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, this.emailFormatValidator]],
      password: ['', Validators.required],
    });
  }

  redirectToLoginPage() {
    this.router.navigate(['/login']);
  }

  emailFormatValidator(control: any) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(control.value)) {
      return { invalidEmailFormat: true };
    }
    return null;
  }

  onSubmit() {
    this.isLoading = true;

    // Get form data
    const formData = {
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      unknown_id: this.unknownUserService.getUnknownUserId()
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (this.signupForm.get('email')!.hasError('invalidEmailFormat')) {
      this.displayErrorMessage = "Please enter a valid email address.";
      this.isLoading = false;
      return;
    }

    if (this.signupForm.value.password!.length < 8) {
      this.displayErrorMessage = "Password must be at least 8 characters long"
      this.isLoading = false
      return
    }

    const uri = this.environnementService.getUrlBackend() + "/users/signup"
    
    this.http.post<any>(uri, formData, { headers, observe: 'response' })
      .subscribe(response => {

        if (response.status === 200) {
          this.usersService.setUserIdLocalStorage(response.body)
          this.usagesService.setMaxUsages(response.body.user.maxUsages)
          this.usagesService.setUsages(response.body.user.currentUsages)
          this.usersService.setUserEmail(response.body.user.email)

          this.isLoading = false;
          this.router.navigate(['/home']);
        } else {
          this.isLoading = false;
          this.displayErrorMessage = "*Email already in use"
        }
      }, error => {
          this.isLoading = false;
          this.displayErrorMessage = "*Email already in use"
      });
  }
}
