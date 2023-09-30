import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
  constructor(private router: Router) { }
  
  isTranslateRouteActive(): boolean {
    return this.router.url.startsWith('/translator');
  }
}
