import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorDashboardOrderHistoryComponent } from './instructor-dashboard-order-history.component';

describe('InstructorDashboardOrderHistoryComponent', () => {
  let component: InstructorDashboardOrderHistoryComponent;
  let fixture: ComponentFixture<InstructorDashboardOrderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorDashboardOrderHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorDashboardOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
