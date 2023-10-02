import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteActiveService } from '../../services/route-active.service';
import { UpdateParamsService } from 'src/app/services/update-params.service';

@Component({
  selector: 'app-reformulate-settings',
  templateUrl: './reformulate-settings.component.html',
  styleUrls: ['./reformulate-settings.component.scss']
})
export class ReformulateSettingsComponent {
  isDropdownOpenLevel: boolean = false;
  isDropdownOpenLength: boolean = false;
  levelSelected: number = 1;
  lengthSelected: string | null = 'same';

  constructor(private router: Router, private routeActiveService: RouteActiveService, private activatedRoute: ActivatedRoute, private updateParamsService: UpdateParamsService) {}

  toggleDropdownLevel() {
    this.isDropdownOpenLevel = !this.isDropdownOpenLevel;
    // If dropdown length are true : passed to false
    if (this.isDropdownOpenLength) {
      this.isDropdownOpenLength = !this.isDropdownOpenLength;
    }
  }

  toggleDropdownLength() {
    this.isDropdownOpenLength = !this.isDropdownOpenLength;
    // If dropdown level are true : passed to false
    if (this.isDropdownOpenLevel) {
      this.isDropdownOpenLevel = !this.isDropdownOpenLevel;
    }
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      // Level query
      if (params.has('lvl')) {
        const lvlValue = Number(params.get('lvl'));
        if (lvlValue > 3) {
          this.levelSelected = 3;
        } else if (lvlValue < 1) {
          this.levelSelected = 0;
        } else {
          this.levelSelected = lvlValue;
        }
      } else {
        this.levelSelected = 1;
      }

      // Length query
      if (params.has('length')) {
        const lengthValue = params.get('length');
        if (lengthValue !== 'short' && lengthValue !== 'same' && lengthValue !== 'long') {
          this.lengthSelected = 'same';
        } else {
          this.lengthSelected = lengthValue;
        }
      } else {
        this.lengthSelected = 'same';
      }

      // Naviguer avec les deux paramètres
      this.router.navigate(['/reformulate'], {
        queryParams: { lvl: this.levelSelected, length: this.lengthSelected },
        queryParamsHandling: 'merge',
        replaceUrl: true
      });
    });
  }

  setLevelLevel(level: number) {
    this.levelSelected = level;

    if (this.routeActiveService.isActiveRoute('/reformulate')) {
      this.updateParamsService.updateQueryParam('lvl', level);
      this.toggleDropdownLevel();
    }
  }

  setLengthLevel(length: string) {
    this.lengthSelected = length;

    if (this.routeActiveService.isActiveRoute('/reformulate')) {
      this.updateParamsService.updateQueryParam('length', length);
      this.toggleDropdownLength();
    }
  }
}
