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
    this.outputData = data;
    this.outputDataSubject.next(data);
  }

  getOutputData() {
    return this.outputData;
  }
}
