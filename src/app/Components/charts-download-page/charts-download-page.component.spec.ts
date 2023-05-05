import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsDownloadPageComponent } from './charts-download-page.component';

describe('ChartsDownloadPageComponent', () => {
  let component: ChartsDownloadPageComponent;
  let fixture: ComponentFixture<ChartsDownloadPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsDownloadPageComponent]
    });
    fixture = TestBed.createComponent(ChartsDownloadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
