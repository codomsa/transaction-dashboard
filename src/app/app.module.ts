import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { BarChartTransactionVolumeComponent } from './bar-chart-transaction-volume/bar-chart-transaction-volume.component';
import { BarChartTotalSalesComponent } from './bar-chart-total-sales/bar-chart-total-sales.component';
import { PieChartVolumeRegionComponent } from './pie-chart-volume-region/pie-chart-volume-region.component';
import { PieChartSalesRegionComponent } from './pie-chart-sales-region/pie-chart-sales-region.component';
import { PartnersTableComponent } from './partners-table/partners-table.component';

import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartTransactionVolumeComponent,
    BarChartTotalSalesComponent,
    PieChartVolumeRegionComponent,
    PieChartSalesRegionComponent,
    PartnersTableComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

