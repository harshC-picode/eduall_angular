import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashbordMessageComponent } from './student-dashbord-message.component';

describe('StudentDashbordMessageComponent', () => {
  let component: StudentDashbordMessageComponent;
  let fixture: ComponentFixture<StudentDashbordMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDashbordMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashbordMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
