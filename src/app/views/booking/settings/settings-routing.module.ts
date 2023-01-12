import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListlengthComponent } from './length/listlength/listlength.component';
import { NewlengthComponent } from './length/newlength/newlength.component';
import { EditlengthComponent } from './length/editlength/editlength.component';
import { DeletelengthComponent } from './length/deletelength/deletelength.component';
import { Routes } from '@angular/router';
import { ListsizeComponent } from './size/listsize/listsize.component';
import { NewsizeComponent } from './size/newsize/newsize.component';
import { DeletesizeComponent } from './size/deletesize/deletesize.component';
import { EditsizeComponent } from './size/editsize/editsize.component';
import { NewstyleComponent } from './style/newstyle/newstyle.component';
import { EditstyleComponent } from './style/editstyle/editstyle.component';
import { DeletestyleComponent } from './style/deletestyle/deletestyle.component';
import { ListcatalogComponent } from './catalog/listcatalog/listcatalog.component';
import { AddcatalogComponent } from './catalog/addcatalog/addcatalog.component';

const routes: Routes = [
  {
    path: '',
    children: [

      //Length
      { path: 'length', component: ListlengthComponent, data: { title: 'Length'} },
      { path: 'newlength', component: NewlengthComponent, data: { title: 'New Length'} },
      { path: 'editlength/:idlength', component: EditlengthComponent, data: { title: 'Edit Length'} },
      { path: 'deletelength/:idlength', component: DeletelengthComponent, data: { title: 'Delete Length'} },

      //Size
      { path: 'size', component: ListsizeComponent, data: { title: 'Size'} },
      { path: 'newsize', component: NewsizeComponent, data: { title: 'New Size'} },
      { path: 'editsize/:idsize', component: EditsizeComponent, data: { title: 'Edit Size'} },
      { path: 'deletesize/:idsize', component: DeletesizeComponent, data: { title: 'Delete Size'} },

      //Style
      //{ path: 'style', component: lists, data: { title: 'Size'} },
      { path: 'newstyle', component: NewstyleComponent, data: { title: 'New Style'} },
      { path: 'editstyle/:idstyle', component: EditstyleComponent, data: { title: 'Edit Style'} },
      { path: 'deletestyle/:idstyle', component: DeletestyleComponent, data: { title: 'Delete Style'} },
      //{ path: 'detailstyle/:idstyle', component: StyledetailComponent, data: { title: 'Style Detail'} },

      //Catalog
      { path: 'catalog', component: ListcatalogComponent, data: { title: 'Catalog'} },
      { path: 'newcatalog', component: AddcatalogComponent, data: { title: 'New Catalog'} },

      //pricing
      //{ path: 'pricing', component: ListpricingComponent, data: { title: 'Pricing'} },
      //{ path: 'newstyle', component: NewstyleComponent, data: { title: 'New Style'} },
      //{ path: 'editstyle/:idstyle', component: EditstyleComponent, data: { title: 'Edit Style'} },
      //{ path: 'deletestyle/:idstyle', component: DeletestyleComponent, data: { title: 'Delete Style'} },
      //{ path: 'detailstyle/:idstyle', component: StyledetailComponent, data: { title: 'Style Detail'} },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SettingsRoutingModule { }
