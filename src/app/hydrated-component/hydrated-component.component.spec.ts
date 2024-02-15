import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydratedComponentComponent } from './hydrated-component.component';

describe('HydratedComponentComponent', () => {
  let component: HydratedComponentComponent;
  let fixture: ComponentFixture<HydratedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HydratedComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HydratedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
