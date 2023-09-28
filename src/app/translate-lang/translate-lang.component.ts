import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-translate-lang',
  templateUrl: './translate-lang.component.html',
  styleUrls: ['./translate-lang.component.scss']
})
export class TranslateLangComponent {
  constructor(private router: Router) { }

  redirectToTranslatePage(language: string) {
    this.router.navigate(['/translator'], { queryParams: { lang: language } });
  }
}
