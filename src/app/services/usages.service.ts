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
    console.log("SERVICE - SET USAGES : ", nbUsages);
    this.currentUsagesSubject.next(nbUsages);
  }

  addUsages() {
    this.currentUsagesSubject.next(this.currentUsagesSubject.value + 1);
  }

  getUsages() {
    console.log("SERVICE - GET USAGES : ", this.currentUsagesSubject.value);
    return this.currentUsagesSubject.value;
  }

  setMaxUsages(newMaxUsages: any) {
    console.log("SERVICE - SET MAX USAGES : ", newMaxUsages);
    this.maxUsagesSubject.next(newMaxUsages);
  }

  getMaxUsages() {
    console.log("SERVICE - GET MAX USAGES : ", this.maxUsagesSubject.value);
    return this.maxUsagesSubject.value;
  }
}
