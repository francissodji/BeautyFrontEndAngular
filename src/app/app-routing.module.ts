import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './services/authentication.guard';
import { CancelappointmentComponent } from './views/appointments/cancelappointment/cancelappointment.component';
import { ConfirmappointmentComponent } from './views/appointments/confirmappointment/confirmappointment.component';
import { ListallappointmentsComponent } from './views/appointments/listallappointments/listallappointments.component';
import { ListappointmentComponent } from './views/appointments/listappointment/listappointment.component';
import { LoginComponent } from './views/login/login.component';
import { AthomeComponent } from './views/menus/athome/athome.component'; 

import { PagenotfoundComponent } from './views/menus/pagenotfound/pagenotfound.component';

const BsamsRoutes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: AthomeComponent },

  { path: 'login', component: LoginComponent },

  { path: 'appointmbystatus', component: ListappointmentComponent },
  { path: 'cancelappoint', component: CancelappointmentComponent },
  { path: 'confirmappoint', component: ConfirmappointmentComponent },

  { path: 'main', loadChildren:()=> import('./views/menus/primemenu/primemenu.component').then(a=>a.PrimemenuComponent), canActivate:[AuthenticationGuard] },



  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(BsamsRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
