import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Color, ScaleType, LegendPosition } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-bar-chart-total-sales',
  templateUrl: './bar-chart-total-sales.component.html',
  styleUrls: ['./bar-chart-total-sales.component.css']
})
export class BarChartTotalSalesComponent implements OnInit {
  public data: any[] = [];

  public view: [number, number] = [700, 400];

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#fd7f6f', '#7eb0d5', '#b2e061', '#bd7ebe', '#ffb55a', '#ffee65', '#beb9db', '#fdcce5', '#8bd3c7'],
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getTotalSales().subscribe((response) => {
      this.data = response.map((item: any) => {
        return {
          name: `${item.year}-${item.month}`,
          value: item.total_sales
        };
      });
    });
  }
}
