import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { ElementInfoComponent } from './components/element-info/element-info.component';
import { ElementRankingComponent } from './components/element-ranking/element-ranking.component';

const routes: Routes = [
  {path: "", component: TableComponent},
  {path: "element-info/:element", component: ElementInfoComponent},
  {path: "ranking/:type", component: ElementRankingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
