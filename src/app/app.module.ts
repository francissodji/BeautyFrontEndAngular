import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimemenuComponent } from './views/menus/primemenu/primemenu.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';



import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormField } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule} from '@angular-material-components/datetime-picker';
import { MatMenuModule } from '@angular/material/menu';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';


import * as $ from 'jquery';

//import { NewcustomerComponent } from './views/customers/newcustomer/newcustomer.component';
//import { ListallcustomerComponent } from './views/customers/listallcustomer/listallcustomer.component';
import { NewappointmentComponent } from './views/booking/custom/appointments/newappointment/newappointment.component';
import { AthomeComponent } from './views/menus/athome/athome.component';
import { ListappointmentComponent } from './views/booking/custom/appointments/listappointment/listappointment.component';
import { ConfirmappointmentComponent } from './views/booking/custom/appointments/confirmappointment/confirmappointment.component';
import { CancelappointmentComponent } from './views/booking/custom/appointments/cancelappointment/cancelappointment.component';
import { ListallappointnewstateComponent } from './views/booking/custom/appointments/listallappointnewstate/listallappointnewstate.component';
import { JobdoneappointmentComponent } from './views/booking/custom/appointments/jobdoneappointment/jobdoneappointment.component';
import { LoginComponent } from './views/auth/login/login.component';
import { NewcustomerComponent } from './views/client/newcustomer/newcustomer.component';
import { ListallcustomerComponent } from './views/client/listallcustomer/listallcustomer.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';



@NgModule({
  declarations: [
    PrimemenuComponent,
    NewcustomerComponent,
    ListallcustomerComponent,
    NewappointmentComponent,
    AthomeComponent,
    ListappointmentComponent,
    ConfirmappointmentComponent,
    CancelappointmentComponent,
    ListallappointnewstateComponent,
    JobdoneappointmentComponent,
    LoginComponent,
    RegisterComponent,
    FullLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTabsModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgxMatDatetimePickerModule,
    NgxMaterialTimepickerModule,
    NgxMatTimepickerModule,
    MatMenuModule
  
  ],
  providers: [],
  bootstrap: [PrimemenuComponent]
})
export class AppModule { }
