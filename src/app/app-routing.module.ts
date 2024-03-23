import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'request-password-reset',
    component:RequestResetComponent
  },
  {
    path:'request-password-reset',
    component:RequestResetComponent
  },
  {
    path:'accueil',
    component:AccueilComponent
  },
  {
    path:'reservation',
    component:ReservationComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'contact',
    component:ContactComponent
  }

  // path: 'login/signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
