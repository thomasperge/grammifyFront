import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsagesService {
  private currentUsagesSubject = new BehaviorSubject<number>(0);
  currentUsages$ = this.currentUsagesSubject.asObservable();

  private maxUsagesSubject = new BehaviorSubject<number>(0);
  maxUsages$ = this.maxUsagesSubject.asObservable();

  setUsages(nbUsages: number) {
    this.currentUsagesSubject.next(nbUsages);
  }

  addUsages() {
    this.currentUsagesSubject.next(this.currentUsagesSubject.value + 1);
  }

  getUsages() {
    return this.currentUsagesSubject.value;
  }

  setMaxUsages(newMaxUsages: any) {
    this.maxUsagesSubject.next(newMaxUsages);
  }

  getMaxUsages() {
    return this.maxUsagesSubject.value;
  }
}
