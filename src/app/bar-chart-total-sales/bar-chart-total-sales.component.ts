import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bar-chart-total-sales',
  templateUrl: './bar-chart-total-sales.component.html',
  styleUrls: ['./bar-chart-total-sales.component.css']
})
export class BarChartTotalSalesComponent implements OnInit {
  chartData: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTotalSales().subscribe((data: any[]) => {
      this.chartData = data.map(item => ({
        name: item.month,
        value: item.sales
      }));
    });
  }
}

