import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordQuizAttemptsComponent } from './dashbord-quiz-attempts.component';

describe('DashbordQuizAttemptsComponent', () => {
  let component: DashbordQuizAttemptsComponent;
  let fixture: ComponentFixture<DashbordQuizAttemptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordQuizAttemptsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordQuizAttemptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
