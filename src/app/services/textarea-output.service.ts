import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextareaOutputService {
  private outputData: string = '';
  outputDataSubject: Subject<string> = new Subject<string>();

  constructor() { }

  setOutPutData(data: string) {
    console.log("=== OUTPUT SERVICE : SET OUTPUT TEXT ===");
    this.outputData = data;
    this.outputDataSubject.next(data);
  }

  getOutputData() {
    console.log("=== OUTPUT SERVICE : GET OUTPUT TEXT ===");
    return this.outputData;
  }
}
