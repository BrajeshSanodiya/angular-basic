import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassdataParentcomponentComponent } from './passdata-parentcomponent.component';

describe('PassdataParentcomponentComponent', () => {
  let component: PassdataParentcomponentComponent;
  let fixture: ComponentFixture<PassdataParentcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassdataParentcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassdataParentcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
