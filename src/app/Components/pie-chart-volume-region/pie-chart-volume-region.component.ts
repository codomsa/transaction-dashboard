import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Color, ScaleType, LegendPosition } from '@swimlane/ngx-charts';
declare const domtoimage: any;
import { saveAs } from 'file-saver';
import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-pie-chart-volume-region',
  templateUrl: './pie-chart-volume-region.component.html',
  styleUrls: ['./pie-chart-volume-region.component.css']
})
export class PieChartVolumeRegionComponent implements OnInit {
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
    this.apiService.getVolumePerRegion().subscribe((response) => {
      this.data = response.map((item: any) => {
        return {
          name: item.region,
          value: item.transaction_volume
        };
      });
    });
  }
}
