import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bar-chart-transaction-volume',
  templateUrl: './bar-chart-transaction-volume.component.html',
  styleUrls: ['./bar-chart-transaction-volume.component.css']
})
export class BarChartTransactionVolumeComponent implements OnInit {
  chartData: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTransactionVolumes().subscribe((data: any[]) => {
      this.chartData = data.map(item => ({
        name: item.month,
        value: item.volume
      }));
    });
  }
}

