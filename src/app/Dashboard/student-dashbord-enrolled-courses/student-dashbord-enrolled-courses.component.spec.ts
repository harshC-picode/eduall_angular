import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashbordEnrolledCoursesComponent } from './student-dashbord-enrolled-courses.component';

describe('StudentDashbordEnrolledCoursesComponent', () => {
  let component: StudentDashbordEnrolledCoursesComponent;
  let fixture: ComponentFixture<StudentDashbordEnrolledCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDashbordEnrolledCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashbordEnrolledCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
