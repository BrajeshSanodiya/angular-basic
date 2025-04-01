import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleMethodsUserComponent } from './lifecycle-methods-user.component';

describe('LifecycleMethodsUserComponent', () => {
  let component: LifecycleMethodsUserComponent;
  let fixture: ComponentFixture<LifecycleMethodsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleMethodsUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleMethodsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
