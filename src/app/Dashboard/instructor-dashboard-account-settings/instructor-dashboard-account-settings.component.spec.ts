import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorDashboardAccountSettingsComponent } from './instructor-dashboard-account-settings.component';

describe('InstructorDashboardAccountSettingsComponent', () => {
  let component: InstructorDashboardAccountSettingsComponent;
  let fixture: ComponentFixture<InstructorDashboardAccountSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorDashboardAccountSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorDashboardAccountSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
