import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouteActiveService } from 'src/app/services/route-active.service';
import { TextareaInputService } from 'src/app/services/textarea-input.service';
import { UsagesService } from 'src/app/services/usages.service';
import { TranslateService } from 'src/app/services/translate.service';
import { TextareaOutputService } from 'src/app/services/textarea-output.service';
import { ReformulateService } from 'src/app/services/reformulate.service';
import { SpellCheckerService } from 'src/app/services/spell-checker.service';
import { SpinnerOutputService } from 'src/app/services/spinner-output.service';
import { UnknownUserService } from 'src/app/services/unknown-user.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  textForm = this.formBuilder.group({
    text: '',
  });

  letterCounter = '0/350';
  letterCount: number = 0;
  currentUsages: number = 0;
  outPutData: String = "";
  responseGpt: any;
  outputContent: any;
  isLoading: any = false;
  warningUsages: string = ""

  constructor(private activedRouteService: RouteActiveService, private formBuilder: FormBuilder, private textService: TextareaInputService, private activatedRoute: ActivatedRoute, private usagesService: UsagesService, private translateService: TranslateService, private textareaOutputService: TextareaOutputService, private reformulateService: ReformulateService, private spellCheckerService: SpellCheckerService, private spinnerOutputService: SpinnerOutputService, private unknownUserService: UnknownUserService, private usersService: UsersService) { }
  
  isTranslateRouteActive(): boolean {
    this.initText()
    this.updateLetterCounter();
    return this.activedRouteService.isActiveRoute('/translator');
  }

  isReformulateRouteActive(): boolean {
    this.initText()
    this.updateLetterCounter();
    return this.activedRouteService.isActiveRoute('/rewriter');
  }

  isSpellCheckerRouteActive(): boolean {
    this.initText()
    this.updateLetterCounter();
    return this.activedRouteService.isActiveRoute('/spell-checker');
  }

  isNewToolsActive(): boolean {
    this.initText()
    this.updateLetterCounter()
    return this.activedRouteService.isActiveRoute('/new-tools')
  }

  updateLetterCounter() {
    let textValue = this.textForm.value.text;
    const currentLength = textValue ? textValue.length : 0;
    // Condition counter 350 letters
    if (currentLength >= 350 && textValue != null) {
      textValue = textValue.substring(0, 350);
      this.textForm.patchValue({ text: textValue });
    }

    this.letterCount = currentLength;
    this.letterCounter = `${currentLength}/350`;
  }

  reverseInputOutput() {
    let copyInput = this.textForm.value.text!
    let copyOutput = this.textareaOutputService.getOutputData()

    // Intput take Output
    this.textService.setText(copyOutput)
    this.textForm.get('text')?.setValue(copyOutput);

    // Output take Input
    this.textareaOutputService.setOutPutData(copyInput)
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

  checkUsagesLimit(): boolean {
    return this.usagesService.getUsages() < this.usagesService.getMaxUsages();
  }

  onSubmitInput(query: String) {
    let textValue = this.textForm.value.text;
    const currentLength = textValue ? textValue.length : 0;
    const unknownUserId = this.unknownUserService.getUnknownUserId();
    const userid = this.usersService.getUserId();
    
    if (unknownUserId) {
      if (!this.checkUsagesLimit()) {
        this.warningUsages = "*You have reached the usage limit. Please upgrade your account to continue);"
      } else {
        if (this.activedRouteService.isActiveRoute('/translator')) {
          // Translate
          if (this.activatedRoute.snapshot.queryParamMap.has('lang') && currentLength >= 1) {
            // Set usages
            this.usagesService.addUsages();
            userid ? this.usersService.addUserUsages(userid) : this.unknownUserService.addUsageUnknownUser(unknownUserId);
        
            this.spinnerOutputService.showLoader();
        
            // Extract the lang value from the params
            const lang = this.activatedRoute.snapshot.queryParamMap.get('lang');;
        
            this.translateService.getTranslateOutput(query, lang).subscribe(response => {
              this.responseGpt = response;
              this.outputContent = this.responseGpt.choices[0].message.content;
        
              this.spinnerOutputService.hideLoader();
              this.sendOutputData();
              return
            });
          }
        } else if (this.activedRouteService.isActiveRoute('/rewriter')) {
          // Reformulate
          if (this.activatedRoute.snapshot.queryParamMap.has('lvl') && this.activatedRoute.snapshot.queryParamMap.has('length') && currentLength >= 1) {
            // Set usages
            this.usagesService.addUsages();
            userid ? this.usersService.addUserUsages(userid) : this.unknownUserService.addUsageUnknownUser(unknownUserId);
        
            this.spinnerOutputService.showLoader();
        
            // Extract the lvl and length values from the params
            const lvl = this.activatedRoute.snapshot.queryParamMap.has('lvl');
            const length = this.activatedRoute.snapshot.queryParamMap.has('length');
        
            this.reformulateService.getReformulateOutput(query, lvl, length).subscribe(response => {
              this.responseGpt = response;
              this.outputContent = this.responseGpt.choices[0].message.content;
        
              this.spinnerOutputService.hideLoader();
              this.sendOutputData();
              return
            });
          }
        } else if (this.activedRouteService.isActiveRoute('/spell-checker')) {
          // Spell Checker
          if (currentLength >= 1) {
            // Set usages
            this.usagesService.addUsages();
            userid ? this.usersService.addUserUsages(userid) : this.unknownUserService.addUsageUnknownUser(unknownUserId);
          
            this.spinnerOutputService.showLoader();
          
            this.spellCheckerService.getSpellCheckerOutput(query).subscribe(response => {
              this.responseGpt = response;
              this.outputContent = this.responseGpt.choices[0].message.content;
          
              this.spinnerOutputService.hideLoader();
              this.sendOutputData();
              return
            });
          }
        } else if (this.activedRouteService.isActiveRoute('/new-tools')) {
          console.log('==> NEW TOOLS !');
          // Set usages
          this.usagesService.addUsages();
          userid ? this.usersService.addUserUsages(userid) : this.unknownUserService.addUsageUnknownUser(unknownUserId);
        
        } 
      }
    }

    this.initText()
  }

  sendOutputData() {
    this.textareaOutputService.setOutPutData(this.outputContent)
  }
}
