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
    // Récupérer le texte initial (s'il existe)
    const initialText = this.textService.getText();
    if (initialText) {
      this.textForm.patchValue({ text: initialText });
    }
  }

  initText() {
    const textValue = this.textForm.value.text;
  
    // Vérifiez si textValue n'est pas null ou undefined avant de l'utiliser
    if (textValue !== null && textValue !== undefined) {
      // Stocker le texte dans le service
      this.textService.setText(textValue);
      console.log('Text submitted:', textValue);
    } else {
      // Utilisez une valeur par défaut ou gérez le cas où textValue est null ou undefined
      console.log('Text submitted: (No text)');
    }
  }

  onSubmit() {
    this.initText()
  }
}
