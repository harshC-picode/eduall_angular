import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorDashboardQuizAttemptsComponent } from './instructor-dashboard-quiz-attempts.component';

describe('InstructorDashboardQuizAttemptsComponent', () => {
  let component: InstructorDashboardQuizAttemptsComponent;
  let fixture: ComponentFixture<InstructorDashboardQuizAttemptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorDashboardQuizAttemptsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorDashboardQuizAttemptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
