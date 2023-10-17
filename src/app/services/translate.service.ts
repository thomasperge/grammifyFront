import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  lang: any;
  envUrl: any;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    this.loadConfig();
  }

  async loadConfig() {
    try {
      const config = await import('./../../../env.json');
      this.envUrl = config.url_backend;
    } catch (error) {
      console.error('Error loading env file :', error);
    }
  }

  getTranslateOutput(query: any, lang: any) {
    const url = this.envUrl + "/translate";
    const data: any = {
      query: query,
      lang: lang
    };
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    return this.http.post(url, data, { headers });
  }
}
