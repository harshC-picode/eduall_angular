import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashbordAssignmentComponent } from './student-dashbord-assignment.component';

describe('StudentDashbordAssignmentComponent', () => {
  let component: StudentDashbordAssignmentComponent;
  let fixture: ComponentFixture<StudentDashbordAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDashbordAssignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashbordAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
