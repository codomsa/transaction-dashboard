import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view: string = 'TransactionDashboard';
  title = 'transaction-dashboard';

  changeView(view: string): void {
    this.view = view;
  }
}