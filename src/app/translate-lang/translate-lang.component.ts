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

    for(let i = 0; i <= this.allIdButton.length; i++) {
      if (this.allIdButton[i] == language) {
        document.getElementById(language)?.classList.add("border-blue-400")
      } else {
        document.getElementById(language)?.classList.add("border-gray-100")
      }
    }
  }
}
