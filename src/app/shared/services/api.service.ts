import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {}

  getTransactionVolumes(): Observable<any> {
    return this.http.get(this.apiUrl + '/api/transaction-volumes');
  }

  getTotalSales(): Observable<any> {
    return this.http.get(this.apiUrl + '/api/total-sales');
  }

  getPartnersData(): Observable<any> {
    return this.http.get(this.apiUrl + 'partners-data');
  }

  getPartnersTableData(): Observable<any> {
    return this.http.get(this.apiUrl + '/api/partners-table');
  }

  getVolumePerRegion(): Observable<any> {
    return this.http.get(this.apiUrl + '/api/volume-per-region');
  }

  getSalesPerRegion(): Observable<any> {
    return this.http.get(this.apiUrl + '/api/sales-per-region');
  }
}
