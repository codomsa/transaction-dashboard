import { Component } from '@angular/core';
import * as htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-charts-download-page',
  templateUrl: './charts-download-page.component.html',
  styleUrls: ['./charts-download-page.component.css']
})
export class ChartsDownloadPageComponent {
  constructor() {}

  downloadChart(chartId: string, fileName: string): void {
    const chartElement = document.getElementById(chartId);
  
    if (chartElement) {
      const htmlData = chartElement.outerHTML;
      const htmlBlob = new Blob([htmlData], { type: 'text/html;charset=utf-8' });
      saveAs(htmlBlob, `${fileName}.html`);
    } else {
      console.error('Chart element not found.');
    }
  }
  
  downloadSalesRegionChart(): void {
    this.downloadChart('sales-region-chart', 'sales-region-chart');
  }
  
  downloadVolumeRegionChart(): void {
    this.downloadChart('volume-region-chart', 'volume-region-chart');
  }
  
  downloadTotalSalesChart(): void {
    this.downloadChart('total-sales-chart', 'total-sales-chart');
  }
  
  downloadTransactionVolumeChart(): void {
    this.downloadChart('transaction-volume-chart', 'transaction-volume-chart');
  }
  
}
