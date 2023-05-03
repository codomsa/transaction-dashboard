import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartVolumeRegionComponent } from './pie-chart-volume-region.component';

describe('PieChartVolumeRegionComponent', () => {
  let component: PieChartVolumeRegionComponent;
  let fixture: ComponentFixture<PieChartVolumeRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartVolumeRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartVolumeRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
