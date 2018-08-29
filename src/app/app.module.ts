import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataUserService } from '../data/in-memory-data.user.service';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { MomentModule } from 'ngx-moment';

import { getDatepickerConfig } from './app.plugins.cofig';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    RouterModule,
    MomentModule,
    FormsModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
