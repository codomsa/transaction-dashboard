import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pie-chart-volume-region',
  templateUrl: './pie-chart-volume-region.component.html',
  styleUrls: ['./pie-chart-volume-region.component.css']
})
export class PieChartVolumeRegionComponent implements OnInit {
  chartData: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getVolumePerRegion().subscribe((data: any[]) => {
      this.chartData = data.map(item => ({
        name: item.region,
        value: item.volume
      }));
    });
  }
}

