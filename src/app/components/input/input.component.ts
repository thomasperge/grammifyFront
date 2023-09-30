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

  constructor(private activedRouteService: RouteActiveService, private formBuilder: FormBuilder, private textService: TextareaInputService,) { }
  
  isTranslateRouteActive(): boolean {
    this.initText()
    return this.activedRouteService.isActiveRoute('/translator');
  }

  isReformulateRouteActive(): boolean {
    this.initText()
    return this.activedRouteService.isActiveRoute('/reformulate');
  }

  isSpellCheckerRouteActive(): boolean {
    this.initText()
    return this.activedRouteService.isActiveRoute('/spell-checker');
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
