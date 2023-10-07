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

  getReformulateOutput(query: String) {
    const url = this.envUrl + "/reformulate"

    this.activatedRoute.queryParamMap.subscribe(params => {
      this.lvl = params.get('lvl');
      this.length = params.get('length');
    })

    const data: any = {
      query: query,
      lvl: this.lvl,
      length: this.length
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(url, data, { headers });
  }
}
