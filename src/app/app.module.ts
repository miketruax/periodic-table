import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./materialModule"
import { TableComponent } from './components/table/table.component';
import { ElementInfoComponent } from './components/element-info/element-info.component';
import { ElementRankingComponent } from './components/element-ranking/element-ranking.component';
import { AtomicMass } from './shared/pipes/atomicMass.pipe';
import { ElementType } from './shared/pipes/elementType.pipe';
import { RankingPipe } from './shared/pipes/ranking.pipe';
import { YearControlsComponent } from './components/year-controls/year-controls.component';
import { SentenceCase } from './shared/pipes/sentenceCase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ElementInfoComponent,
    ElementRankingComponent,
    AtomicMass,
    ElementType, SentenceCase,
    RankingPipe, YearControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})  
export class AppModule { }
