import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Color, ScaleType, LegendPosition } from '@swimlane/ngx-charts';
import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-bar-chart-transaction-volume',
  templateUrl: './bar-chart-transaction-volume.component.html',
  styleUrls: ['./bar-chart-transaction-volume.component.css']
})
export class BarChartTransactionVolumeComponent implements OnInit {
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
    this.apiService.getTransactionVolumes().subscribe((response) => {
      this.data = response.map((item: any) => {
        return {
          name: `${item.year}-${item.month}`,
          value: item.volume
        };
      });
    });
  }
}

