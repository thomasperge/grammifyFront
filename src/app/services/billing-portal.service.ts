import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BillingPortalService {
  envUrl = ""

  constructor(private http: HttpClient) { }

  getSessionUrl(userId: any) {
    const url = environment.apiURL + "/stripe/billing-portal";
    
    const data: any = {
      id: userId,
    };
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    return this.http.post(url, data, { headers });
  }
}
