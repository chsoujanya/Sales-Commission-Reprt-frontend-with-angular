import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveCommissionReportComponent } from './retrieve-commission-report.component';

describe('RetrieveCommissionReportComponent', () => {
  let component: RetrieveCommissionReportComponent;
  let fixture: ComponentFixture<RetrieveCommissionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveCommissionReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetrieveCommissionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
