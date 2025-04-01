import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Passdata2ParentcomponentComponent } from './passdata2-parentcomponent.component';

describe('Passdata2ParentcomponentComponent', () => {
  let component: Passdata2ParentcomponentComponent;
  let fixture: ComponentFixture<Passdata2ParentcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Passdata2ParentcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Passdata2ParentcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
