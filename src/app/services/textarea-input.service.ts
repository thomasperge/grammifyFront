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
    this.textSubject.next(text);
  }
  
  getText(): string {
    const text = this.textSubject.getValue();
    return text;
  }
}
