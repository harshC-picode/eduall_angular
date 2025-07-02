import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordWishlistComponent } from './dashbord-wishlist.component';

describe('DashbordWishlistComponent', () => {
  let component: DashbordWishlistComponent;
  let fixture: ComponentFixture<DashbordWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordWishlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
