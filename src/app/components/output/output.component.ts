import { Component, OnInit } from '@angular/core';
import { RouteActiveService } from 'src/app/services/route-active.service';
import { TextareaOutputService } from 'src/app/services/textarea-output.service';
import { SpinnerOutputService } from 'src/app/services/spinner-output.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  receivedData: string = "";
  isLoading: any = false;

  constructor(private activedRouteService: RouteActiveService, private outputService: TextareaOutputService, private spinnerOutputService: SpinnerOutputService) {}

  ngOnInit(): void {
    this.spinnerOutputService.isLoading$.subscribe(isLoading => {
      this.receivedData = " "
      this.isLoading = isLoading;
    });

    this.outputService.outputDataSubject.subscribe(data => {
      this.receivedData = data;
    });

  }

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
