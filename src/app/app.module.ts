import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { BarChartTransactionVolumeComponent } from './bar-chart-transaction-volume/bar-chart-transaction-volume.component';
import { BarChartTotalSalesComponent } from './bar-chart-total-sales/bar-chart-total-sales.component';
import { PieChartVolumeRegionComponent } from './pie-chart-volume-region/pie-chart-volume-region.component';
import { PieChartSalesRegionComponent } from './pie-chart-sales-region/pie-chart-sales-region.component';
import { PartnersTableComponent } from './partners-table/partners-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartTransactionVolumeComponent,
    BarChartTotalSalesComponent,
    PieChartVolumeRegionComponent,
    PieChartSalesRegionComponent,
    PartnersTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

