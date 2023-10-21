import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironnementService } from 'src/app/services/environnement.service';

@Injectable({
  providedIn: 'root'
})
export class BillingPortalService {
  envUrl = ""

  constructor(private http: HttpClient, private environnementService: EnvironnementService) { }

  getSessionUrl(userId: any) {
    const url = this.environnementService.getUrlBackend() + "/stripe/billing-portal";
    
    const data: any = {
      id: userId,
    };
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    return this.http.post(url, data, { headers });
  }
}
