import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss']
})
export class KeywordsComponent {
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() paragraphe1: string = "";
  @Input() paragraphe2: string = "";
  @Input() paragraphe3: string = "";
}
