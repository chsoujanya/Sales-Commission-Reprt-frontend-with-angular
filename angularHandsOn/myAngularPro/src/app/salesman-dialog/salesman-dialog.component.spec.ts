import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmanDialogComponent } from './salesman-dialog.component';

describe('SalesmanDialogComponent', () => {
  let component: SalesmanDialogComponent;
  let fixture: ComponentFixture<SalesmanDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesmanDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesmanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
