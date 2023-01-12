import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './services/authentication.guard';
import { CancelappointmentComponent } from './views/booking/custom/appointments/cancelappointment/cancelappointment.component';
import { ConfirmappointmentComponent } from './views/booking/custom/appointments/confirmappointment/confirmappointment.component';
import { ListappointmentComponent } from './views/booking/custom/appointments/listappointment/listappointment.component';
import { LoginComponent } from './views/auth/login/login.component';
import { AthomeComponent } from './views/menus/athome/athome.component'; 

import { PagenotfoundComponent } from './views/menus/pagenotfound/pagenotfound.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { ListcatalogComponent } from './views/booking/settings/catalog/listcatalog/listcatalog.component';
import { Full_ROUTES } from './shared/routes/full-layout.routes';
//import { FulllayoutComponent } from './layouts/fulllayout/fulllayout.component';

const BsamsRoutes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },

  //{ path: 'view', component: FulllayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES },
  
  { path: 'home', component: AthomeComponent },

  { path: 'login', component: LoginComponent },

  { path: 'catalog', component: ListcatalogComponent },
  //{ path: 'catalog', component: ListcatalogComponent },

  { path: 'appointmbystatus', component: ListappointmentComponent },
  { path: 'cancelappoint', component: CancelappointmentComponent },
  { path: 'confirmappoint', component: ConfirmappointmentComponent },

  { path: 'dock', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES },


  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(BsamsRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
