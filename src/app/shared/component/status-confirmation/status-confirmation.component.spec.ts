import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusConfirmationComponent } from './status-confirmation.component';

describe('StatusConfirmationComponent', () => {
  let component: StatusConfirmationComponent;
  let fixture: ComponentFixture<StatusConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusConfirmationComponent]
    });
    fixture = TestBed.createComponent(StatusConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
