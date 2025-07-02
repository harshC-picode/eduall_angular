import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashbordSettingsComponent } from './student-dashbord-settings.component';

describe('StudentDashbordSettingsComponent', () => {
  let component: StudentDashbordSettingsComponent;
  let fixture: ComponentFixture<StudentDashbordSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDashbordSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashbordSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
