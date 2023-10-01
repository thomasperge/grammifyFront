import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteActiveService } from '../../services/route-active.service';

@Component({
  selector: 'app-reformulate-settings',
  templateUrl: './reformulate-settings.component.html',
  styleUrls: ['./reformulate-settings.component.scss']
})
export class ReformulateSettingsComponent {
  isDropdownOpen: boolean = false;
  levelSelected: number = 1;

  constructor(private router: Router, private routeActiveService: RouteActiveService, private activatedRoute: ActivatedRoute) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      if (params.has('lvl')) {
        if (Number(params.get('lvl')) > 3) {
          this.levelSelected = 3;
          this.router.navigate([], {relativeTo: this.activatedRoute, queryParams: { lvl: 3 }, queryParamsHandling: 'merge', replaceUrl: true});
        } else if (Number(params.get('lvl')) < 1) {
          this.levelSelected = 0;
          this.router.navigate([], {relativeTo: this.activatedRoute, queryParams: { lvl: 1 }, queryParamsHandling: 'merge', replaceUrl: true});
        } else {
          this.levelSelected = Number(params.get('lvl'));
        }
      } else {
        this.router.navigate(['/reformulate'], { queryParams: { lvl: 1 } });
      }
    });
  }

  setLevel(level: number) {
    this.levelSelected = level;

    if (this.routeActiveService.isActiveRoute('/reformulate')) {
      this.router.navigate(['/reformulate'], { queryParams: { lvl: level } });
      this.toggleDropdown();
    }
  }
}
