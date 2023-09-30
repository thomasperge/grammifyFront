import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouteActiveService } from 'src/app/services/route-active.service';
import { TextareaInputService } from 'src/app/services/textarea-input.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  textForm = this.formBuilder.group({
    text: '',
  });

  letterCounter = '0/1000';

  constructor(private activedRouteService: RouteActiveService, private formBuilder: FormBuilder, private textService: TextareaInputService,) { }
  
  isTranslateRouteActive(): boolean {
    this.initText()
    this.updateLetterCounter();
    return this.activedRouteService.isActiveRoute('/translator');
  }

  isReformulateRouteActive(): boolean {
    this.initText()
    this.updateLetterCounter();
    return this.activedRouteService.isActiveRoute('/reformulate');
  }

  isSpellCheckerRouteActive(): boolean {
    this.initText()
    this.updateLetterCounter();
    return this.activedRouteService.isActiveRoute('/spell-checker');
  }

  updateLetterCounter() {
    const textValue = this.textForm.value.text;
    const currentLength = textValue ? textValue.length : 0;
    this.letterCounter = `${currentLength}/1000`;
  }

  ngOnInit(): void {
    const initialText = this.textService.getText();
    if (initialText) {
      this.textForm.patchValue({ text: initialText });
    }
  }

  initText() {
    const textValue = this.textForm.value.text;
  
    if (textValue !== null && textValue !== undefined) {
      this.textService.setText(textValue);
    }
  }

  onSubmit() {
    this.initText()
  }
}
