import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A2aComponent } from './a2a.component';

describe('A2aComponent', () => {
  let component: A2aComponent;
  let fixture: ComponentFixture<A2aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A2aComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A2aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
