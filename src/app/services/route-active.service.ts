import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteActiveService {
  constructor(private router: Router) {}

  isActiveRoute(route: string): boolean {
    return this.router.url.startsWith(route);
  }
}
