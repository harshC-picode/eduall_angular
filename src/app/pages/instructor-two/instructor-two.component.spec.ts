import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorTwoComponent } from './instructor-two.component';

describe('InstructorTwoComponent', () => {
  let component: InstructorTwoComponent;
  let fixture: ComponentFixture<InstructorTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
