import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UpdateParamsService {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  updateQueryParam(paramName: string, paramValue: any) {
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    queryParams[paramName] = paramValue;
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams,
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }
}
