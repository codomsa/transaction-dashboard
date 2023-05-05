import { Component } from '@angular/core';
import { saveSvgAsPng } from 'save-svg-as-png';
import * as htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-pie-charts',
  templateUrl: './pie-charts.component.html',
  styleUrls: ['./pie-charts.component.css'],
})
export class PieChartsComponent {
  constructor() {}

  downloadPng(): void {
    const chartElements = document.querySelectorAll('app-pie-chart-sales-region svg, app-pie-chart-volume-region svg');

    chartElements.forEach((chart, index) => {
      const fileName = index === 0 ? 'Sales_by_Region' : 'Transaction_Volume_by_Region';
      saveSvgAsPng(chart as HTMLElement, `${fileName}.png`);
    });
  }

}

