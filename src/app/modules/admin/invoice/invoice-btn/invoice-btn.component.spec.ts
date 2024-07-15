import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceBtnComponent } from './invoice-btn.component';

describe('InvoiceBtnComponent', () => {
  let component: InvoiceBtnComponent;
  let fixture: ComponentFixture<InvoiceBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceBtnComponent]
    });
    fixture = TestBed.createComponent(InvoiceBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
