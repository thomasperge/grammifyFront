import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnknownUserService {

  constructor(private http: HttpClient) { }

  async createUnknownUser(idUser: String) {
    console.log("Service to creat users");
    
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

  async getUsageUnknownUser(idUser: String): Promise<number> {
    return new Promise<number>(async (resolve, reject) => {
      const config = await import('../../../env.json');
      const url = config.url_backend + "/unknown-user/get-usage";
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
  
      const data: any = {
        id: idUser
      };
  
      this.http.post<any>(url, data, { headers, observe: 'response' }).subscribe(
        response => {
          if (response.status === 200) {
            resolve(response.body.currentUsages);
          } else {
            resolve(0);
          }
        },
        error => {
          resolve(0);
        }
      );
    });
  }
}
