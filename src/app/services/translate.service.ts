import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironnementService } from 'src/app/services/environnement.service';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  lang: any;
  envUrl: any;

  constructor(private http: HttpClient, private environnementService: EnvironnementService) { }

  getTranslateOutput(query: any, lang: any) {
    const url = this.environnementService.getUrlBackend() + "/translate";

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
