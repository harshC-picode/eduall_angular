import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashbordWishlistComponent } from './student-dashbord-wishlist.component';

describe('StudentDashbordWishlistComponent', () => {
  let component: StudentDashbordWishlistComponent;
  let fixture: ComponentFixture<StudentDashbordWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDashbordWishlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashbordWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
