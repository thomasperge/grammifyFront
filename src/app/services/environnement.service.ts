import { Injectable } from '@angular/core';
import { environmentProd } from 'src/environments/environment.production';
import { environmentDev } from 'src/environments/environment.development';

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
