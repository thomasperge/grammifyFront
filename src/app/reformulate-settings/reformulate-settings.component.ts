import { Component } from '@angular/core';

@Component({
  selector: 'app-reformulate-settings',
  templateUrl: './reformulate-settings.component.html',
  styleUrls: ['./reformulate-settings.component.scss']
})
export class ReformulateSettingsComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
