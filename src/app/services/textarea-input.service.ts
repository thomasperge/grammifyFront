import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextareaInputService {
  private textSubject = new BehaviorSubject<string>('');
  text$: Observable<string> = this.textSubject.asObservable();

  constructor() {}

  setText(text: string) {
    console.log('Setting text:', text);
    this.textSubject.next(text);
  }
  
  getText(): string {
    const text = this.textSubject.getValue();
    console.log('Getting text:', text);
    return text;
  }
}
