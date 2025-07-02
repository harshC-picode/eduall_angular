import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTutorsComponent } from './find-tutors.component';

describe('FindTutorsComponent', () => {
  let component: FindTutorsComponent;
  let fixture: ComponentFixture<FindTutorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindTutorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindTutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
