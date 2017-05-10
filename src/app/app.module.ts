import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {TableComponent} from "./table/table.component";
import {AtomicMass} from "./pipes/atomicMass.pipe";
import {ElementInfoComponent} from "./element-info/element-info.component";
import {ElementType} from "./pipes/elementType.pipe";
import {RankingPipe} from "./pipes/ranking.pipe";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ElementInfoComponent,
    AtomicMass,
    ElementType,
    RankingPipe
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
