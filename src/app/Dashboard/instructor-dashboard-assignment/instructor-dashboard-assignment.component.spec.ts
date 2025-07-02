import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorDashboardAssignmentComponent } from './instructor-dashboard-assignment.component';

describe('InstructorDashboardAssignmentComponent', () => {
  let component: InstructorDashboardAssignmentComponent;
  let fixture: ComponentFixture<InstructorDashboardAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorDashboardAssignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorDashboardAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
