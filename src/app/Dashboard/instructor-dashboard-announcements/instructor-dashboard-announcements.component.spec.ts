import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorDashboardAnnouncementsComponent } from './instructor-dashboard-announcements.component';

describe('InstructorDashboardAnnouncementsComponent', () => {
  let component: InstructorDashboardAnnouncementsComponent;
  let fixture: ComponentFixture<InstructorDashboardAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorDashboardAnnouncementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorDashboardAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
