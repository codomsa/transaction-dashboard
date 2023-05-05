import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartsComponent } from './bar-charts/bar-charts.component';
import { PieChartsComponent } from './pie-charts/pie-charts.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/bar-charts', pathMatch: 'full' },
  { path: 'bar-charts', component: BarChartsComponent },
  { path: 'pie-charts', component: PieChartsComponent },
  { path: 'data-table', component: DataTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
