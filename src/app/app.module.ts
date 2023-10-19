import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TranslateLangComponent } from './components/translate-lang/translate-lang.component';
import { OfficeComponent } from './components/office/office.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReformulateSettingsComponent } from './components/reformulate-settings/reformulate-settings.component';
import { UsagesComponent } from './components/usages/usages.component';
import { FlagLangComponent } from './components/flag-lang/flag-lang.component';
import { CapitalizeFirstLetterPipe } from './pipe/capitalize-first-letter.pipe';
import { AboutComponent } from './components/about/about.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ClipboardModule } from 'ngx-clipboard';
import { ClipboardComponent } from './components/clipboard/clipboard.component';
import { ProfilComponent } from './components/profil/profil.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    FooterComponent,
    NavbarComponent,
    TranslateLangComponent,
    OfficeComponent,
    LoginComponent,
    SignupComponent,
    ReformulateSettingsComponent,
    UsagesComponent,
    FlagLangComponent,
    CapitalizeFirstLetterPipe,
    AboutComponent,
    PricingComponent,
    ClipboardComponent,
    ProfilComponent,
    MobileComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
