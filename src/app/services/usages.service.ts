import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsagesService {
  private currentUsagesSubject = new BehaviorSubject<number>(0);
  currentUsages$ = this.currentUsagesSubject.asObservable();

  setUsages(nbUsages: number) {
    this.currentUsagesSubject.next(nbUsages);
  }

  addUsages() {
    this.currentUsagesSubject.next(this.currentUsagesSubject.value + 1);
  }

  getUsages() {
    return this.currentUsagesSubject.value;
  }
}
