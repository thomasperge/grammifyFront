import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  envUrl: any;

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) {
    this.loadConfig()
  }
  
  textForm = this.formBuilder.group({
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
    // Get form data
    const formData = {
      email: this.textForm.value.email,
      password: this.textForm.value.password
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const uri = this.envUrl + "/users/signup"
    
    this.http.post(uri, formData, { headers })
      .subscribe(response => {
        console.log('===================> Réponse du serveur :', response);
      });
  }
}
