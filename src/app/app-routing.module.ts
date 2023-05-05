import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartsComponent } from './Components/bar-charts/bar-charts.component';
import { PieChartsComponent } from './Components/pie-charts/pie-charts.component';
import { DataTableComponent } from './Components/data-table/data-table.component';
import { ChartsDownloadPageComponent } from './Components/charts-download-page/charts-download-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/bar-charts', pathMatch: 'full' },
  { path: 'bar-charts', component: BarChartsComponent },
  { path: 'pie-charts', component: PieChartsComponent },
  { path: 'data-table', component: DataTableComponent },
  { path: 'charts-download-page', component: ChartsDownloadPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
