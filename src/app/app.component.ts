import { Component } from '@angular/core';
import { saveSvgAsPng } from 'save-svg-as-png';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view: string = 'TransactionDashboard';

  changeView(view: string): void {
    this.view = view;
  }

  downloadTotalSalesChart(): void {
    const svg = document.querySelector('#total-sales-chart svg');
    saveSvgAsPng(svg as HTMLElement, 'total-sales-chart.png');
  }

  downloadTransactionVolumeChart(): void {
    const svg = document.querySelector('#transaction-volume-chart svg');
    saveSvgAsPng(svg as HTMLElement, 'transaction-volume-chart.png');
  }

  downloadSalesRegionChart(): void {
    const svg = document.querySelector('#sales-region-chart svg');
    saveSvgAsPng(svg as HTMLElement, 'sales-region-chart.png');
  }

  downloadVolumeRegionChart(): void {
    const svg = document.querySelector('#volume-region-chart svg');
    saveSvgAsPng(svg as HTMLElement, 'volume-region-chart.png');
  }
}

