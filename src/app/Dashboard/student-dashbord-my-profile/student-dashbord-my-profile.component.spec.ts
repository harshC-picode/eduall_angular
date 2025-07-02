import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashbordMyProfileComponent } from './student-dashbord-my-profile.component';

describe('StudentDashbordMyProfileComponent', () => {
  let component: StudentDashbordMyProfileComponent;
  let fixture: ComponentFixture<StudentDashbordMyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDashbordMyProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashbordMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
