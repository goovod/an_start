import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataUserService } from '../data/in-memory-data.user.service';
import { BsDatepickerConfig, ModalModule, TooltipModule } from 'ngx-bootstrap';
import { MomentModule } from 'ngx-moment';
import { DataTableModule } from 'angular-6-datatable';

import { getDatepickerConfig } from './app.plugins.cofig';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserListComponent,
    DialogModalComponent
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    AppRoutingModule,
    MomentModule,
    ModalModule.forRoot(),
    FormsModule,
    DataTableModule,
    TooltipModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCKeS-142UlShoDKxSqTP2rT_de9i5s99E',
      libraries: ['places'],
      language: 'en'
    }),
    AngularFontAwesomeModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataUserService, { dataEncapsulation: false, delay: 100 }
    )
  ],
  providers: [{ provide: BsDatepickerConfig, useFactory: getDatepickerConfig }],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogModalComponent
  ]
})
export class AppModule { }
