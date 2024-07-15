import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchBoardComponent } from './dispatch-board.component';

describe('DispatchBoardComponent', () => {
  let component: DispatchBoardComponent;
  let fixture: ComponentFixture<DispatchBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DispatchBoardComponent]
    });
    fixture = TestBed.createComponent(DispatchBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
