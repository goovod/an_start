import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerConfig, ModalModule, AlertModule, TooltipModule } from 'ngx-bootstrap';
import { MomentModule } from 'ngx-moment';
import { DataTableModule } from 'angular-6-datatable';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataUserService } from '../data/in-memory-data.user.service';

import { getDatepickerConfig } from './app.plugins.cofig';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserListComponent,
    DialogModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    MomentModule,
    FormsModule,
    DataTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCKeS-142UlShoDKxSqTP2rT_de9i5s99E',
      libraries: ['places'],
      language: 'en'
    }),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataUserService, { dataEncapsulation: false, delay: 100 }
    ),
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [{ provide: BsDatepickerConfig, useFactory: getDatepickerConfig }],
  entryComponents: [
    DialogModalComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
