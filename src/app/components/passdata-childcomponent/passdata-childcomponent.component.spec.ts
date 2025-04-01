import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassdataChildcomponentComponent } from './passdata-childcomponent.component';

describe('PassdataChildcomponentComponent', () => {
  let component: PassdataChildcomponentComponent;
  let fixture: ComponentFixture<PassdataChildcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassdataChildcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassdataChildcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
