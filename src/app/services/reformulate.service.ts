import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironnementService } from 'src/app/services/environnement.service';

@Injectable({
  providedIn: 'root'
})
export class ReformulateService {
  envUrl: any;
  lvl: any;
  length: any;

  constructor(private http: HttpClient, private environnementService: EnvironnementService) { }

  getReformulateOutput(query: any, lvl: any, length: any) {
    const url = this.environnementService.getUrlBackend() + "/reformulate";
  
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
