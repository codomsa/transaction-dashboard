import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { BarChartTotalSalesComponent } from './Components/bar-chart-total-sales/bar-chart-total-sales.component';
import { BarChartTransactionVolumeComponent } from './Components/bar-chart-transaction-volume/bar-chart-transaction-volume.component';
import { PieChartSalesRegionComponent } from './Components/pie-chart-sales-region/pie-chart-sales-region.component';
import { PieChartVolumeRegionComponent } from './Components/pie-chart-volume-region/pie-chart-volume-region.component';
import { PartnersTableComponent } from './Components/partners-table/partners-table.component';
import { BarChartsComponent } from './Components/bar-charts/bar-charts.component';
import { PieChartsComponent } from './Components/pie-charts/pie-charts.component';
import { DataTableComponent } from './Components/data-table/data-table.component';
import { ChartsDownloadPageComponent } from './Components/charts-download-page/charts-download-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartTotalSalesComponent,
    BarChartTransactionVolumeComponent,
    PieChartSalesRegionComponent,
    PieChartVolumeRegionComponent,
    PartnersTableComponent,
    BarChartsComponent,
    PieChartsComponent,
    DataTableComponent,
    ChartsDownloadPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxChartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


