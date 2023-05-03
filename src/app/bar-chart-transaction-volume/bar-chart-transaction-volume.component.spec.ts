import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartTransactionVolumeComponent } from './bar-chart-transaction-volume.component';

describe('BarChartTransactionVolumeComponent', () => {
  let component: BarChartTransactionVolumeComponent;
  let fixture: ComponentFixture<BarChartTransactionVolumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartTransactionVolumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartTransactionVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
