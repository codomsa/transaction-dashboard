import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartSalesRegionComponent } from './pie-chart-sales-region.component';

describe('PieChartSalesRegionComponent', () => {
  let component: PieChartSalesRegionComponent;
  let fixture: ComponentFixture<PieChartSalesRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartSalesRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartSalesRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
