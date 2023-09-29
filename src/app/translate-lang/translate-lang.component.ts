import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-translate-lang',
  templateUrl: './translate-lang.component.html',
  styleUrls: ['./translate-lang.component.scss']
})

export class TranslateLangComponent {
  allIdButton = ["fr", "en", "sp"];
  constructor(private router: Router) { }

  redirectToTranslatePage(language: string) {
    this.router.navigate(['/translator'], { queryParams: { lang: language } });

    for(let i = 0; i < this.allIdButton.length; i++) {
      const buttonId = this.allIdButton[i];
      if (buttonId === language) {
        document.getElementById(buttonId)?.classList.remove("border-gray-200")
        document.getElementById(buttonId)?.classList.add("border-blue-500")
      } else {
        document.getElementById(buttonId)?.classList.remove("border-blue-500")
        document.getElementById(buttonId)?.classList.add("border-gray-200")
      }
    }
}

}
