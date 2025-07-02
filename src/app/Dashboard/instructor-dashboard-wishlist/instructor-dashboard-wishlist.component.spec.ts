import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorDashboardWishlistComponent } from './instructor-dashboard-wishlist.component';

describe('InstructorDashboardWishlistComponent', () => {
  let component: InstructorDashboardWishlistComponent;
  let fixture: ComponentFixture<InstructorDashboardWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorDashboardWishlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorDashboardWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
