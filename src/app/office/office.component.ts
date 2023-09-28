import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})
export class OfficeComponent {
  constructor(private router: Router) { }

  redirectToTranslatePage() {
    this.router.navigate(['/translator']);
  }

  redirectToReformulatePage() {
    this.router.navigate(['/reformulate']);
  }

  redirectToSpellCheckerPage() {
    this.router.navigate(['/spell-checker']);
  }

  isReformulateRouteActive(): boolean {
    return this.router.url === '/reformulate';
  }

  isSpellCheckerRouteActive(): boolean {
    return this.router.url === '/spell-checker';
  }
}
