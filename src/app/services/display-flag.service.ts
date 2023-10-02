import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayFlagService {
  constructor() { }

  getUrlFlag(flagId: string) {
    return `./assets/flag/flag-${flagId}-svgrepo-com.svg`
  }
}
