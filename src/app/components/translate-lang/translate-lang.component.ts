import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-translate-lang',
  templateUrl: './translate-lang.component.html',
  styleUrls: ['./translate-lang.component.scss']
})

export class TranslateLangComponent {
  activeButton: String | null = null;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const urlLang = this.route.snapshot.queryParamMap.get('lang');
    urlLang !== null ? this.setButtonHighlight(urlLang) : null;
  }

  setButtonHighlight(language: String) {
    this.activeButton = language;
  }  

  redirectToTranslatePage(language: String) {
    this.router.navigate(['/translator'], { queryParams: { lang: language } });
    this.setButtonHighlight(language)
  }
}
