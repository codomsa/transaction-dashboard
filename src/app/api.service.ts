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
    return this.http.get(this.apiUrl + 'transaction-volumes');
  }

  getTotalSales(): Observable<any> {
    return this.http.get(this.apiUrl + 'total-sales');
  }

  getVolumePerRegion(): Observable<any> {
    return this.http.get(this.apiUrl + 'volume-per-region');
  }

  getSalesPerRegion(): Observable<any> {
    return this.http.get(this.apiUrl + 'sales-per-region');
  }

  getPartnersData(): Observable<any> {
    return this.http.get(this.apiUrl + 'partners-data');
  }
}
