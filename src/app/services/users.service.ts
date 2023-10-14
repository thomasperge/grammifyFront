import { Injectable } from '@angular/core';
import { UnknownUserService } from './unknown-user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userid: String = ""

  constructor(private unknownUserService: UnknownUserService, private http: HttpClient) { }

  setUserId(newUserid: String) {
    this.userid = newUserid
  }

  getUserId(): any {
    return this.userid;
  }

  setUserIdLocalStorage(response: any) {
    localStorage.setItem('userId', response.user._id);
    localStorage.setItem('unknownId', response.user.unknown_id);

    this.setUserId(response.user._id)
    this.unknownUserService.setUnknownUserId(response.user.unknown_id)

    console.log(response.user._id, response.user.unknown_id);
  }

  async getUserUsages(userId: String) {
    return new Promise<number>(async (resolve, reject) => {
      const config = await import('../../../env.json');
      const url = config.url_backend + "/users/get-usage";
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
  
      const data: any = {
        id: userId
      };
  
      this.http.post<any>(url, data, { headers, observe: 'response' }).subscribe(
        response => {
          if (response.status === 200) {
            console.log("USER UASGES : ", response.body.currentUsages);
            resolve(response.body.currentUsages);
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
