import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextareaOutputService {
  private outputData: string = '';

  constructor() { }

  setOutPutData(data: string) {
    this.outputData = data;
  }

  getOutputData() {
    return this.outputData;
  }
}
