import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashbordReviewsComponent } from './student-dashbord-reviews.component';

describe('StudentDashbordReviewsComponent', () => {
  let component: StudentDashbordReviewsComponent;
  let fixture: ComponentFixture<StudentDashbordReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDashbordReviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashbordReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
