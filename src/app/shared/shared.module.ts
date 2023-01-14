import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HeaderbarComponent } from './component/headerbar/headerbar.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ColorSwitcherComponent } from './component/color-switcher/color-switcher.component';
//import { UploadComponent } from '../views/booking/settings/upload/upload.component';


@NgModule({
  exports: [
    CommonModule,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ColorSwitcherComponent
],
imports: [
    RouterModule,
    CommonModule
],
  declarations: [
    SidebarComponent,
    HeaderbarComponent,
    NavbarComponent,
    FooterComponent,
    ColorSwitcherComponent
    //UploadComponent
  ]
})
export class SharedModule { }
