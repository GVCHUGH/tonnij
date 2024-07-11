import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTruckComponent } from './all-truck.component';

describe('AllTruckComponent', () => {
  let component: AllTruckComponent;
  let fixture: ComponentFixture<AllTruckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTruckComponent]
    });
    fixture = TestBed.createComponent(AllTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
