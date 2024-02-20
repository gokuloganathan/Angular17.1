import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsAndRxJsComponent } from './signals-and-rx-js.component';

describe('SignalsAndRxJsComponent', () => {
  let component: SignalsAndRxJsComponent;
  let fixture: ComponentFixture<SignalsAndRxJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsAndRxJsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalsAndRxJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
