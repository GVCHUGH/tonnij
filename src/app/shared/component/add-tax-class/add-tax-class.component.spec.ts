import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaxClassComponent } from './add-tax-class.component';

describe('AddTaxClassComponent', () => {
  let component: AddTaxClassComponent;
  let fixture: ComponentFixture<AddTaxClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTaxClassComponent]
    });
    fixture = TestBed.createComponent(AddTaxClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
