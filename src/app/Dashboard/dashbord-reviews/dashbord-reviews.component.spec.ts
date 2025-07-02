import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordReviewsComponent } from './dashbord-reviews.component';

describe('DashbordReviewsComponent', () => {
  let component: DashbordReviewsComponent;
  let fixture: ComponentFixture<DashbordReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordReviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
