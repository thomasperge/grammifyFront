import { Component } from '@angular/core';
import { UsagesService } from 'src/app/services/usages.service';
import { UsersService } from 'src/app/services/users.service';
import { UnknownUserService } from 'src/app/services/unknown-user.service';

@Component({
  selector: 'app-usages',
  templateUrl: './usages.component.html',
  styleUrls: ['./usages.component.scss']
})
export class UsagesComponent {
  usages: number | undefined;
  maxUsages: number | undefined;

  constructor(private usagesService: UsagesService, private unknownUserService: UnknownUserService, private usersService: UsersService) {
    this.usagesService.currentUsages$.subscribe(usages => {
      this.usages = usages;
    });

    this.usagesService.maxUsages$.subscribe(maxUsages => {
      this.maxUsages = maxUsages;
    });
  }
}
