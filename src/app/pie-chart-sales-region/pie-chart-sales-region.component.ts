import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pie-chart-sales-region',
  templateUrl: './pie-chart-sales-region.component.html',
  styleUrls: ['./pie-chart-sales-region.component.css']
})
export class PieChartSalesRegionComponent implements OnInit {
  chartData: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getSalesPerRegion().subscribe((data: any[]) => {
      this.chartData = data.map(item => ({
        name: item.region,
        value: item.sales
      }));
    });
  }
}

