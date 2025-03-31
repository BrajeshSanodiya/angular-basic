import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveNgswitchComponent } from './directive-ngswitch.component';

describe('DirectiveNgswitchComponent', () => {
  let component: DirectiveNgswitchComponent;
  let fixture: ComponentFixture<DirectiveNgswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveNgswitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveNgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
