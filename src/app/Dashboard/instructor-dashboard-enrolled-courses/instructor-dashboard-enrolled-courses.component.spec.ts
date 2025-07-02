import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorDashboardEnrolledCoursesComponent } from './instructor-dashboard-enrolled-courses.component';

describe('InstructorDashboardEnrolledCoursesComponent', () => {
  let component: InstructorDashboardEnrolledCoursesComponent;
  let fixture: ComponentFixture<InstructorDashboardEnrolledCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorDashboardEnrolledCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorDashboardEnrolledCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
