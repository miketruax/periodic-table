import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {TableComponent} from "./table/table.component";
import {AtomicMass} from "./pipes/atomicMass.pipe";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AtomicMass
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
