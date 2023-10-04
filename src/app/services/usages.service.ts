import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsagesService {
  currentUsages: number = 0;
  
  addUsages() {
    console.log("HERE !");
    this.currentUsages++
  }

  getUsages() {
    return this.currentUsages;
  }
}
