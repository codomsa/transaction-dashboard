import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-partners-table',
  templateUrl: './partners-table.component.html',
  styleUrls: ['./partners-table.component.css']
})
export class PartnersTableComponent implements OnInit {
  partnersData: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPartnersData().subscribe((data: any[]) => {
      this.partnersData = data;
    });
  }

  sort(column: string, order: 'asc' | 'desc'): void {
    this.partnersData.sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];

      if (order === 'asc') {
        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
      } else {
        return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
      }
    });
  }
}
