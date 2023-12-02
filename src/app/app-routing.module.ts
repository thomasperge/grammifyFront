import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficeComponent } from './components/office/office.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ProfilComponent } from './components/profil/profil.component';

const routes: Routes = [
  { path: '', redirectTo: 'rewriter', pathMatch: 'full' },
  { path: 'home', redirectTo: 'rewriter', pathMatch: 'full' },
  { path: 'translator', component: OfficeComponent },
  { path: 'rewriter', component: OfficeComponent },
  { path: 'spell-checker', component: OfficeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'new-tools', component: OfficeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
