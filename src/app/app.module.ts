import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/primeng';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';


import {InputTextModule} from 'primeng/primeng';



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputTextModule,
    HttpModule,
    Angular2FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
