import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Passdata2ChildcomponentComponent } from './passdata2-childcomponent.component';

describe('Passdata2ChildcomponentComponent', () => {
  let component: Passdata2ChildcomponentComponent;
  let fixture: ComponentFixture<Passdata2ChildcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Passdata2ChildcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Passdata2ChildcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
