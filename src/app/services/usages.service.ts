import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsagesService {
  currentUsages: number = 65;
  
  addUsages() {
    this.currentUsages++
  }

  getUsages() {
    return this.currentUsages;
  }
}
