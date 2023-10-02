import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-flag-lang',
  templateUrl: './flag-lang.component.html',
  styleUrls: ['./flag-lang.component.scss']
})
export class FlagLangComponent {
  @Input() countryName: string = '';
  @Input() flagUrl: string = "";
}
