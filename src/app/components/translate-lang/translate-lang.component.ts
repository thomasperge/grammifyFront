import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateParamsService } from 'src/app/services/update-params.service';
import { DisplayFlagService } from 'src/app/services/display-flag.service';

@Component({
  selector: 'app-translate-lang',
  templateUrl: './translate-lang.component.html',
  styleUrls: ['./translate-lang.component.scss']
})

export class TranslateLangComponent {
  activeButton: String | null = null;
  isDropdownOpenLang: any = false;
  displayFlagDropDown: any = null;

  constructor(private router: Router, private route: ActivatedRoute, private updateParamsService: UpdateParamsService, private displayFlagService: DisplayFlagService) { }
  
  toggleDropdownLang() {
    this.isDropdownOpenLang = !this.isDropdownOpenLang;
  }

  ngOnInit() {
    const urlLang = this.route.snapshot.queryParamMap.get('lang');
    urlLang !== null ? this.setButtonHighlight(urlLang) : null;
    this.setDefaultLang()
  }

  setDefaultLang() {
    const defaultLang: any = 'fr';
    this.updateParamsService.updateQueryParam('lang', defaultLang);
    this.setButtonHighlight(defaultLang)
  }

  setButtonHighlight(language: String) {
    this.activeButton = language;
  }  

  redirectToTranslatePage(language: String) {
    this.router.navigate(['/translator'], { queryParams: { lang: language } });
    this.setButtonHighlight(language);
  }

  setDropdownLang(language: string) {
    this.router.navigate(['/translator'], { queryParams: { lang: language } });
    this.toggleDropdownLang();
    this.setButtonHighlight("dd");

    this.displayFlagDropDown = this.displayFlagService.getUrlFlag(language);
  }
}
