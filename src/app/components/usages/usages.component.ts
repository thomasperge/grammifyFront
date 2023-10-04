import { Component } from '@angular/core';
import { UsagesService } from 'src/app/services/usages.service';

@Component({
  selector: 'app-usages',
  templateUrl: './usages.component.html',
  styleUrls: ['./usages.component.scss']
})
export class UsagesComponent {
  usages: number;

  constructor(private usagesService: UsagesService) {
    this.usages = this.usagesService.getUsages();
  }
}
