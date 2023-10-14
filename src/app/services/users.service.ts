import { Injectable } from '@angular/core';
import { UnknownUserService } from './unknown-user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userid: String = ""
  email: String = ""
  currentUsage: any = 0
  maxUsages: any = 0

  constructor(private unknownUserService: UnknownUserService, private http: HttpClient) { }

  setUserId(newUserid: String) {
    this.userid = newUserid
  }

  getUserId(): any {
    return this.userid;
  }

  getUserEmail() {
    return this.email
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

    console.log(response.user._id, response.user.unknown_id);
  }

  async getUserData(userId: any) {
    return new Promise<any>(async (resolve, reject) => {
      const config = await import('../../../env.json');
      const url = config.url_backend + "/users/get-data";
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
  
      const data: any = {
        id: userId
      };
  
      this.http.post<any>(url, data, { headers, observe: 'response' }).subscribe(
        response => {
          if (response.status === 200) {
            console.log("USER UASGES : ", response.body.user.currentUsages);
            this.email = response.body.user.email
            this.currentUsage = response.body.user.currentUsages
            this.maxUsages = response.body.user.maxUsages
            console.log(response.body.user);
            resolve(response.body.user);
          } else {
            resolve(-1);
          }
        },
        error => {
          resolve(-1);
        }
      );
    });
  }

  async addUserUsages(userId: string) {
    const config = await import('../../../env.json');
    const url = config.url_backend + "/users/add-usage"

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const data: any = {
      id: userId
    }

    this.http.post<any>(url, data, { headers, observe: 'response' })
      .subscribe(response => {

        if (response.status === 200) {
          console.log("Usage added");
        } else {
          console.log("Error : Cannot added usage !");
        }
      }, error => {
          console.log("Error : Cannot added usage !");
      });
  }
}
