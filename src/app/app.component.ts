import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GrammifyFront';

  constructor(private router: Router) { }

  ngOnInit(): void {
    initFlowbite();
  }

  redirectToTranslatePage() {
    this.router.navigate(['/translator']);
  }

  redirectToReformulatePage() {
    this.router.navigate(['/reformulate']);
  }

  redirectToSpellCheckerPage() {
    this.router.navigate(['/spell-checker']);
  }

  isTranslateRouteActive(): boolean {
    return this.router.url === '/translator';
  }
}
