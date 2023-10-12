import { Component } from '@angular/core';
import { UsagesService } from 'src/app/services/usages.service';

@Component({
  selector: 'app-usages',
  templateUrl: './usages.component.html',
  styleUrls: ['./usages.component.scss']
})
export class UsagesComponent {
  usages: number | undefined;

  constructor(private usagesService: UsagesService) {
    this.usagesService.currentUsages$.subscribe(usages => {
      this.usages = usages;
    });
  }
}
