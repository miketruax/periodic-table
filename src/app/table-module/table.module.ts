import { NgModule } from '@angular/core';
import {TableComponent} from "./table/table.component";
import {AtomicMass} from "./shared/pipes/atomicMass.pipe";
import {ElementInfoComponent} from "./element-info/element-info.component";
import {ElementType} from "./shared/pipes/elementType.pipe";
import {RankingPipe} from "./element-ranking/pipes/ranking.pipe";
import {ElementRankingComponent} from "./element-ranking/element-ranking.component";
import {RankingInfoPipe} from "./element-ranking/pipes/rankingInfo.pipe";
import {KeysPipe} from "./shared/pipes/keys.pipe";
import {YearControlsComponent} from './year-controls/year-controls.component'
import {CommonModule} from "@angular/common";
import { MaterialModule } from './materialModule';

@NgModule({
  declarations: [
    TableComponent,
    ElementInfoComponent,
    ElementRankingComponent,
    AtomicMass,
    ElementType,
    RankingPipe, RankingInfoPipe, KeysPipe, YearControlsComponent
  ],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [TableComponent,
    ElementInfoComponent,
    ElementRankingComponent,
    AtomicMass,
    ElementType,
    RankingPipe, RankingInfoPipe, KeysPipe, YearControlsComponent]

})
export class TableModule { }
