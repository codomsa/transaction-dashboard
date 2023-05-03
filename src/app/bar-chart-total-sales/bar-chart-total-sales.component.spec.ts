import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartTotalSalesComponent } from './bar-chart-total-sales.component';

describe('BarChartTotalSalesComponent', () => {
  let component: BarChartTotalSalesComponent;
  let fixture: ComponentFixture<BarChartTotalSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartTotalSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartTotalSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
