import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditcompanyComponent } from './company/editcompany/editcompany.component';
import { NewclientComponent } from './client/newclient/newclient.component';
import { EditclientComponent } from './client/editclient/editclient.component';
import { DeleteclientComponent } from './client/deleteclient/deleteclient.component';
import { UpdateclientComponent } from './client/updateclient/updateclient.component';
import { UpdateassociateComponent } from './associate/updateassociate/updateassociate.component';
import { NewassociateComponent } from './associate/newassociate/newassociate.component';
import { DeleteassociateComponent } from './associate/deleteassociate/deleteassociate.component';



@NgModule({
  declarations: [
    EditcompanyComponent,
    NewclientComponent,
    EditclientComponent,
    DeleteclientComponent,
    UpdateclientComponent,
    UpdateassociateComponent,
    NewassociateComponent,
    DeleteassociateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CompanyModule { }
