import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReformulateService {
  envUrl: any;
  lvl: any;
  length: any;

  constructor(private http: HttpClient) { }

  getReformulateOutput(query: any, lvl: any, length: any) {
    const url = environment.apiURL + "/reformulate";
  
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
