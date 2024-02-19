import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCatlogueComponent } from './food-catlogue.component';

describe('FoodCatlogueComponent', () => {
  let component: FoodCatlogueComponent;
  let fixture: ComponentFixture<FoodCatlogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodCatlogueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodCatlogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
