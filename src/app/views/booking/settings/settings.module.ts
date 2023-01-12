import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditstyleComponent } from './style/editstyle/editstyle.component';
import { NewstyleComponent } from './style/newstyle/newstyle.component';
import { DeletestyleComponent } from './style/deletestyle/deletestyle.component';
import { UpdatestyleComponent } from './style/updatestyle/updatestyle.component';
import { UpdatelengthComponent } from './length/updatelength/updatelength.component';
import { NewlengthComponent } from './length/newlength/newlength.component';
import { DeletelengthComponent } from './length/deletelength/deletelength.component';
import { EditlengthComponent } from './length/editlength/editlength.component';
import { NewsizeComponent } from './size/newsize/newsize.component';
import { EditsizeComponent } from './size/editsize/editsize.component';
import { DeletesizeComponent } from './size/deletesize/deletesize.component';
import { UpdatesizeComponent } from './size/updatesize/updatesize.component';
import { ListlengthComponent } from './length/listlength/listlength.component';
import { ListsizeComponent } from './size/listsize/listsize.component';
import { AddcatalogComponent } from './catalog/addcatalog/addcatalog.component';
import { ListcatalogComponent } from './catalog/listcatalog/listcatalog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UploadComponent } from './upload/upload.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    EditstyleComponent,
    NewstyleComponent,
    DeletestyleComponent,
    UpdatestyleComponent,
    UpdatelengthComponent,
    NewlengthComponent,
    DeletelengthComponent,
    EditlengthComponent,
    NewsizeComponent,
    EditsizeComponent,
    DeletesizeComponent,
    UpdatesizeComponent,
    ListlengthComponent,
    ListsizeComponent,
    AddcatalogComponent,
    ListcatalogComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class SettingsModule { }
