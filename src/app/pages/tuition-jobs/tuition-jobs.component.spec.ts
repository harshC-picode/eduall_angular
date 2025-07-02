import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuitionJobsComponent } from './tuition-jobs.component';

describe('TuitionJobsComponent', () => {
  let component: TuitionJobsComponent;
  let fixture: ComponentFixture<TuitionJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TuitionJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuitionJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
