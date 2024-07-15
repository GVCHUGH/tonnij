import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteBoardComponent } from './complete-board.component';

describe('CompleteBoardComponent', () => {
  let component: CompleteBoardComponent;
  let fixture: ComponentFixture<CompleteBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompleteBoardComponent]
    });
    fixture = TestBed.createComponent(CompleteBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
