import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkingCustomerComponent } from './walking-customer.component';

describe('WalkingCustomerComponent', () => {
  let component: WalkingCustomerComponent;
  let fixture: ComponentFixture<WalkingCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalkingCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalkingCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
