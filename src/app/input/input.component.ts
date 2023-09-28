import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  constructor(private router: Router) { }
  
  isTranslateRouteActive(): boolean {
    return this.router.url === '/translator';
  }
}
