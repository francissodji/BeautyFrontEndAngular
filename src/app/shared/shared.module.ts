import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HeaderbarComponent } from './component/headerbar/headerbar.component';
//import { FootbarComponent } from './component/footbar/footbar.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { UploadComponent } from './component/upload/upload.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderbarComponent,
    //FootbarComponent,
    NavbarComponent,
    FooterComponent,
    UploadComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
