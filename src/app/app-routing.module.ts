import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficeComponent } from './components/office/office.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ProfilComponent } from './components/profil/profil.component';

const routes: Routes = [
  { path: '', redirectTo: 'translator', pathMatch: 'full' },
  { path: 'home', redirectTo: 'translator', pathMatch: 'full' },
  { path: 'translator', component: OfficeComponent },
  { path: 'rewriter', component: OfficeComponent },
  { path: 'spell-checker', component: OfficeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'profil', component: ProfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

// Degager couleur footer
// navbar : space-beeween
// Usages coler le 0/0
// CopiCliboadr, background vlue


// grammity.com
// grammulate.com
// grammscribe.com |
// grammila.com
// grammito.com
// grammiti.com
