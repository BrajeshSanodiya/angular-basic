import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingLazyHomeComponent } from './routing-lazy-home.component';

describe('RoutingLazyHomeComponent', () => {
  let component: RoutingLazyHomeComponent;
  let fixture: ComponentFixture<RoutingLazyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingLazyHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingLazyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
