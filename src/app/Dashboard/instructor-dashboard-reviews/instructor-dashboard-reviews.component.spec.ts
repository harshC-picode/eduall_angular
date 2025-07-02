import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorDashboardReviewsComponent } from './instructor-dashboard-reviews.component';

describe('InstructorDashboardReviewsComponent', () => {
  let component: InstructorDashboardReviewsComponent;
  let fixture: ComponentFixture<InstructorDashboardReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorDashboardReviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorDashboardReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
