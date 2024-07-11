import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTrailersComponent } from './all-trailers.component';

describe('AllTrailersComponent', () => {
  let component: AllTrailersComponent;
  let fixture: ComponentFixture<AllTrailersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTrailersComponent]
    });
    fixture = TestBed.createComponent(AllTrailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
