import { Component } from '@angular/core';
import { PartnersTableComponent } from '../partners-table/partners-table.component';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent {
  constructor(private partnersTableComponent: PartnersTableComponent) {}

  downloadCsv(): void {
    this.partnersTableComponent.exportDataAsCSV();
  }
}

