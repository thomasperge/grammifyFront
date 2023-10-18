import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillingPortalService {
  envUrl = ""

  constructor(private http: HttpClient) {
    this.loadConfig()
  }

  async loadConfig() {
    try {
      const config = await import('./../../../env.json');
      this.envUrl = config.url_backend;
    } catch (error) {
      console.error('Error loading env file :', error);
    }
  }

  getSessionUrl(userId: any) {
    const url = this.envUrl + "/stripe/billing-portal";
    
    const data: any = {
      id: userId,
    };
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    return this.http.post(url, data, { headers });
  }
}
