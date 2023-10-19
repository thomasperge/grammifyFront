import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  lang: any;
  envUrl: any;

  constructor(private http: HttpClient,) { }

  getTranslateOutput(query: any, lang: any) {
    const url = environment.apiURL + "/translate";

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
