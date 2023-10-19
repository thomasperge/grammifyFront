import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpellCheckerService {
  envUrl: any;

  constructor(private http: HttpClient) { }

  getSpellCheckerOutput(query: String) {
    const url = environment.apiURL + "/spell-checker"

    const data: any = {
      query: query,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(url, data, { headers });
  }
}
