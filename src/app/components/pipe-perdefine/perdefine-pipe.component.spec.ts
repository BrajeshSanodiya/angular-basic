import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerdefinePipeComponent } from './perdefine-pipe.component';

describe('PerdefinePipeComponent', () => {
  let component: PerdefinePipeComponent;
  let fixture: ComponentFixture<PerdefinePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerdefinePipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerdefinePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
