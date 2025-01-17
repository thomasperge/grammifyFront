import { Injectable } from '@angular/core';
import { UnknownUserService } from './unknown-user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsagesService } from './usages.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { EnvironnementService } from 'src/app/services/environnement.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userid: String = ""
  currentUsage: any = 0
  maxUsages: any = 0
  private emailSubject = new BehaviorSubject<String>("");
  email$ = this.emailSubject.asObservable();

  constructor(private unknownUserService: UnknownUserService, private http: HttpClient, private usagesService: UsagesService, private router: Router, private environnementService: EnvironnementService) { }

  setUserId(newUserid: String) {
    this.userid = newUserid
  }

  getUserId(): any {
    return this.userid;
  }

  getUserEmail() {
    return this.emailSubject.value;
  }

  setUserEmail(newEmail: String) {
    this.emailSubject.next(newEmail);
  }

  getCurrentUsages() {
    return this.currentUsage
  }

  getMaxUsages() {
    return this.maxUsages
  }

  setUserIdLocalStorage(response: any) {
    localStorage.setItem('userId', response.user._id);
    localStorage.setItem('unknownId', response.user.unknown_id);

    this.setUserId(response.user._id)
    this.unknownUserService.setUnknownUserId(response.user.unknown_id)
  }

  async getUserData(userId: any) {
    return new Promise<any>(async (resolve, reject) => {
      const url = this.environnementService.getUrlBackend() + "/users/get-data";
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
  
      const data: any = {
        id: userId
      };
  
      this.http.post<any>(url, data, { headers, observe: 'response' }).subscribe(
        response => {
          if (response.status === 200) {

            this.emailSubject.next(response.body.user.email);
            this.currentUsage = response.body.user.currentUsages
            this.maxUsages = response.body.user.maxUsages

            this.usagesService.setUsages(this.currentUsage)
            this.usagesService.setMaxUsages(this.maxUsages)
            resolve(response.body.user);
          } else {
            this.router.navigate(['/login'])
            resolve(-1);
          }
        },
        error => {
          this.router.navigate(['/login'])
          resolve(-1);
        }
      );
    });
  }

  async addUserUsages(userId: string) {
    const url = this.environnementService.getUrlBackend() + "/users/add-usage"

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const data: any = {
      id: userId
    }

    this.http.post<any>(url, data, { headers, observe: 'response' }).subscribe();
  }
}
