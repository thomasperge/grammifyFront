import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficeComponent } from './components/office/office.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TwitterComponent } from './components/twitter/twitter.component';

const routes: Routes = [
  { path: '', redirectTo: 'translator', pathMatch: 'full' },
  { path: 'home', redirectTo: 'translator', pathMatch: 'full' },
  { path: 'translator', component: OfficeComponent },
  { path: 'reformulate', component: OfficeComponent },
  { path: 'spell-checker', component: OfficeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'twitter', component: TwitterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
