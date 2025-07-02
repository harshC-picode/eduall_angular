import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashbordMyQuizAttemptsComponent } from './student-dashbord-my-quiz-attempts.component';

describe('StudentDashbordMyQuizAttemptsComponent', () => {
  let component: StudentDashbordMyQuizAttemptsComponent;
  let fixture: ComponentFixture<StudentDashbordMyQuizAttemptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDashbordMyQuizAttemptsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashbordMyQuizAttemptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
