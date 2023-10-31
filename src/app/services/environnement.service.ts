import { Injectable } from '@angular/core';
import environmentDev from 'src/environments/environment.development';
import environmentProd from 'src/environments/environment.production';

@Injectable({
  providedIn: 'root'
})
export class EnvironnementService {

  constructor() { }

  getUrlBackend() { 
    if (environmentDev.activedDev) {
      return environmentDev.apiURL;
    } else {
      return environmentProd.apiURL;
    }
  }
}
