import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironnementService } from 'src/app/services/environnement.service';

@Injectable({
  providedIn: 'root'
})
export class SpellCheckerService {
  envUrl: any;

  constructor(private http: HttpClient, private environnementService: EnvironnementService) { }

  getSpellCheckerOutput(query: String) {
    const url = this.environnementService.getUrlBackend() + "/spell-checker"

    const data: any = {
      query: query,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(url, data, { headers });
  }
}
