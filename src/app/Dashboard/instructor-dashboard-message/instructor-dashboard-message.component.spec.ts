import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorDashboardMessageComponent } from './instructor-dashboard-message.component';

describe('InstructorDashboardMessageComponent', () => {
  let component: InstructorDashboardMessageComponent;
  let fixture: ComponentFixture<InstructorDashboardMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorDashboardMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorDashboardMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
