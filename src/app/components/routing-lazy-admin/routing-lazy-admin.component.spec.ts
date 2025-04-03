import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingLazyAdminComponent } from './routing-lazy-admin.component';

describe('RoutingLazyAdminComponent', () => {
  let component: RoutingLazyAdminComponent;
  let fixture: ComponentFixture<RoutingLazyAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingLazyAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingLazyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
