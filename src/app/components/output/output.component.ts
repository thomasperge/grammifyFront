import { Component } from '@angular/core';
import { RouteActiveService } from 'src/app/services/route-active.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
  constructor(private activedRouteService: RouteActiveService) { }
  
  isTranslateRouteActive(): boolean {
    return this.activedRouteService.isActiveRoute('/translator');
  }

  isReformulateRouteActive(): boolean {
    return this.activedRouteService.isActiveRoute('/reformulate');
  }

  isSpellCheckerRouteActive(): boolean {
    return this.activedRouteService.isActiveRoute('/spell-checker');
  }
}
