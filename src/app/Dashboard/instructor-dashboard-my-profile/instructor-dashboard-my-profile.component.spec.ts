import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorDashboardMyProfileComponent } from './instructor-dashboard-my-profile.component';

describe('InstructorDashboardMyProfileComponent', () => {
  let component: InstructorDashboardMyProfileComponent;
  let fixture: ComponentFixture<InstructorDashboardMyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorDashboardMyProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorDashboardMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
