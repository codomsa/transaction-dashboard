import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../shared/services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import * as _ from 'lodash';
import { saveAs } from 'file-saver';

interface PartnerData {
  partner_name: string;
  transaction_volume: number;
  total_sales: number;
}

@Component({
  selector: 'app-partners-table',
  templateUrl: './partners-table.component.html',
  styleUrls: ['./partners-table.component.css'],
})
export class PartnersTableComponent implements OnInit {
  displayedColumns: string[] = ['partner_name', 'total_sales', 'transaction_volume'];
  dataSource = new MatTableDataSource<PartnerData>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | null = null;
  @ViewChild(MatSort, { static: true }) sort: MatSort | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPartnersTableData().subscribe((data: PartnerData[]) => {
      this.dataSource.data = this.groupByPartnerName(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  groupByPartnerName(data: PartnerData[]): PartnerData[] {
    const groupedData = _(data)
      .groupBy('partner_name')
      .map((transactions, partner_name) => ({
        partner_name,
        transaction_volume: transactions.length,
        total_sales: _.sumBy(transactions, 'sale_value'),
      }))
      .value();
    return groupedData;
  }

  exportDataAsCSV(): void {
    const data = this.dataSource.data.map((row) => [row.partner_name, row.total_sales, row.transaction_volume]);
    const csvContent = 'Partner Name,Total Sales,Transaction Volume\n' + data.map((e) => e.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'partners-data.csv');
  }
}
