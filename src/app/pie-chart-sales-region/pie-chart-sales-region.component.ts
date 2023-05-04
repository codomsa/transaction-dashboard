import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Color, ScaleType, LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-chart-sales-region',
  templateUrl: './pie-chart-sales-region.component.html',
  styleUrls: ['./pie-chart-sales-region.component.css']
})
export class PieChartSalesRegionComponent implements OnInit {
  public data: any[] = [];

  public view: [number, number] = [700, 400];

  public legendPosition: LegendPosition = LegendPosition.Below;
  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#fd7f6f', '#7eb0d5', '#b2e061', '#bd7ebe', '#ffb55a', '#ffee65', '#beb9db', '#fdcce5', '#8bd3c7'],
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getSalesPerRegion().subscribe((response) => {
      this.data = response.map((item: any) => {
        return {
          name: item.region,
          value: item.total_sales
        };
      });
    });
  }
}
