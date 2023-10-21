import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsagesService } from './usages.service';
import { Router } from '@angular/router';
import { EnvironnementService } from 'src/app/services/environnement.service';

@Injectable({
  providedIn: 'root'
})
export class UnknownUserService {
  unknownUserid: String = ""
  currentUsages: any = 0
  maxUsages: any = 0

  constructor(private http: HttpClient, private usagesService: UsagesService, private router: Router, private environnementService: EnvironnementService) { }

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
    const url = this.environnementService.getUrlBackend() + "/unknown-user/create"

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
          this.currentUsages = response.body.user.currentUsages
          this.maxUsages = response.body.user.maxUsages

          this.usagesService.setUsages(response.body.user.currentUsages)
          this.usagesService.setMaxUsages(response.body.user.maxUsages)
        } else {
          console.log("Error : Users not Created !");
        }
      }, error => {
          console.log("Error : Users not Created !");
      });
  }

  async getUnknownUserData(idUser: String) {
    return new Promise<number>(async (resolve, reject) => {
      const url = this.environnementService.getUrlBackend() + "/unknown-user/get-data";
  
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

            this.usagesService.setUsages(this.currentUsages)
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

  async addUsageUnknownUser(idUser: string) {
    const url = this.environnementService.getUrlBackend() + "/unknown-user/add-usage"

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
