import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfForCvComponent } from './cf-for-cv.component';

describe('CfForCvComponent', () => {
  let component: CfForCvComponent;
  let fixture: ComponentFixture<CfForCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CfForCvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfForCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
