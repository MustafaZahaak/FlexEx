import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualAddComponent } from './individual-add.component';

describe('IndividualAddComponent', () => {
  let component: IndividualAddComponent;
  let fixture: ComponentFixture<IndividualAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
