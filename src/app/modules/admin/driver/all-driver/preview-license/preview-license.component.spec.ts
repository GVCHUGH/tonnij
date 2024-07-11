import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewLicenseComponent } from './preview-license.component';

describe('PreviewLicenseComponent', () => {
  let component: PreviewLicenseComponent;
  let fixture: ComponentFixture<PreviewLicenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewLicenseComponent]
    });
    fixture = TestBed.createComponent(PreviewLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
