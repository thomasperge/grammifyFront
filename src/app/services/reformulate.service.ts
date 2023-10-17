import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReformulateService {
  envUrl: any;
  lvl: any;
  length: any;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
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

  getReformulateOutput(query: any, lvl: any, length: any) {
    const url = this.envUrl + "/reformulate";
  
    const data: any = {
      query: query,
      lvl: lvl,
      length: length
    };
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    return this.http.post(url, data, { headers });
  }
}
