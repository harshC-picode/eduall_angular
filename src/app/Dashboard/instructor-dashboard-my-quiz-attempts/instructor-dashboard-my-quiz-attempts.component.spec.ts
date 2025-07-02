import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorDashboardMyQuizAttemptsComponent } from './instructor-dashboard-my-quiz-attempts.component';

describe('InstructorDashboardMyQuizAttemptsComponent', () => {
  let component: InstructorDashboardMyQuizAttemptsComponent;
  let fixture: ComponentFixture<InstructorDashboardMyQuizAttemptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorDashboardMyQuizAttemptsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorDashboardMyQuizAttemptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
