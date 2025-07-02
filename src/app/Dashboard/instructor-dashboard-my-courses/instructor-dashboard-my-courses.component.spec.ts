import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorDashboardMyCoursesComponent } from './instructor-dashboard-my-courses.component';

describe('InstructorDashboardMyCoursesComponent', () => {
  let component: InstructorDashboardMyCoursesComponent;
  let fixture: ComponentFixture<InstructorDashboardMyCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorDashboardMyCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorDashboardMyCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
