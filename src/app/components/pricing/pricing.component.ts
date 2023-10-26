import { Component } from '@angular/core';
import { BillingPortalService } from 'src/app/services/billing-portal.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  userId = "";
  isConnected: boolean = this.usersService.getUserId();
  url: any;
  loadingButton: number | null = null;

  constructor(private billingPortalService: BillingPortalService, private usersService: UsersService) { }

  choosePlan(buttonNumber: number) {
    this.loadingButton = buttonNumber;
    this.userId = this.usersService.getUserId();
  
    this.billingPortalService.getSessionUrl(this.userId).subscribe(response => {
      this.url = response;
      this.loadingButton = null;
  
      window.open(this.url.url, '_blank');
    });
  }
}
