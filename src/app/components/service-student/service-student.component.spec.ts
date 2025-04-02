import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceStudentComponent } from './service-student.component';

describe('ServiceStudentComponent', () => {
  let component: ServiceStudentComponent;
  let fixture: ComponentFixture<ServiceStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
