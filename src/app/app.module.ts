import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
 import { AccueilComponent } from './components/accueil/accueil.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';
 import {HttpClientModule}from '@angular/common/http';
import { PizzaComponent } from './components/pizza/pizza.component';
import { BaguettesComponent } from './components/baguettes/baguettes.component';
import { TacosComponent } from './components/tacos/tacos.component';
import { ChinesseComponent } from './components/chinesse/chinesse.component';
import { JusnaturelComponent } from './components/jusnaturel/jusnaturel.component';
import { PlatsenegalaisComponent } from './components/platsenegalais/platsenegalais.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
     AccueilComponent,
    ReservationComponent,
    MenuComponent,
    ContactComponent,
    PizzaComponent,
    BaguettesComponent,
    TacosComponent,
    ChinesseComponent,
    JusnaturelComponent,
    PlatsenegalaisComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
