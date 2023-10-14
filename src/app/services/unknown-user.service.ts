import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnknownUserService {
  unknownUserid: String = ""
  currentUsages: any = 0
  maxUsages: any = 0

  constructor(private http: HttpClient) { }

  setUnknownUserId(newUnknownUserid: any) {
    this.unknownUserid = newUnknownUserid
  }

  getUnknownUserId(): any {
    return this.unknownUserid;
  }

  getUnknownUserCurrentUsage() {
    return this.currentUsages
  }

  getUnknownUserMaxUsage() {
    return this.maxUsages
  }

  async createUnknownUser(idUser: String) {
    const config = await import('../../../env.json');
    const url = config.url_backend + "/unknown-user/create"

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const data: any = {
      id: idUser
    }

    this.http.post<any>(url, data, { headers, observe: 'response' })
      .subscribe(response => {
        console.log("Service to creat users : In suscribe");

        if (response.status === 200) {
          console.log("Users Created !");
        } else {
          console.log("Error : Users not Created !");
        }
      }, error => {
          console.log("Error : Users not Created !");
      });
  }

  async getUnknownUserData(idUser: String) {
    return new Promise<number>(async (resolve, reject) => {
      const config = await import('../../../env.json');
      const url = config.url_backend + "/unknown-user/get-data";
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
  
      const data: any = {
        id: idUser
      };
  
      this.http.post<any>(url, data, { headers, observe: 'response' }).subscribe(
        response => {
          if (response.status === 200) {
            this.currentUsages = response.body.user.currentUsages
            this.maxUsages = response.body.user.maxUsages
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

  async addUsageUnknownUser(idUser: string) {
    const config = await import('../../../env.json');
    const url = config.url_backend + "/unknown-user/add-usage"

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const data: any = {
      id: idUser
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
