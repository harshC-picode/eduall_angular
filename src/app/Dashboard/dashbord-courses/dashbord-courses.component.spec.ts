import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordCoursesComponent } from './dashbord-courses.component';

describe('DashbordCoursesComponent', () => {
  let component: DashbordCoursesComponent;
  let fixture: ComponentFixture<DashbordCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
