import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveGroupingComponent } from './form-reactive-grouping.component';

describe('FormReactiveGroupingComponent', () => {
  let component: FormReactiveGroupingComponent;
  let fixture: ComponentFixture<FormReactiveGroupingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormReactiveGroupingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReactiveGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
