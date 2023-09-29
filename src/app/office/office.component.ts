import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})
export class OfficeComponent implements OnInit {
  activeButton: String | null = null;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(urlSegments => {
      const urlSegment = urlSegments[0].path;
      this.setHighlightButton(urlSegment);
    });
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

  setHighlightButton(idRoute: string) {
    this.activeButton = idRoute;
  }
}
