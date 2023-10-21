import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})
export class OfficeComponent implements OnInit {
  activeButton: String | null = null;
  spellCheckerDisplay: Boolean = false

  constructor(private router: Router, private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    this.route.url.subscribe(urlSegments => {
      // Display or not Spell Checker
      this.spellCheckerDisplay = ['translator', 'rewriter'].includes(urlSegments[0].path) || (urlSegments[0].path === 'spell-checker' && this.usersService.getUserId());
      
      const urlSegment = urlSegments[0].path;
      this.setHighlightButton(urlSegment);
    });
  }

  redirectToTranslatePage() {
    this.router.navigate(['/translator']);
  }

  redirectToReformulatePage() {
    this.router.navigate(['/rewriter']);
  }

  redirectToSpellCheckerPage() {
    this.router.navigate(['/spell-checker']);
  }

  setHighlightButton(idRoute: string) {
    this.activeButton = idRoute;
  }
}
