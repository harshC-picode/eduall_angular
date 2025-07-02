import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutallComponent } from './layoutall.component';

describe('LayoutallComponent', () => {
  let component: LayoutallComponent;
  let fixture: ComponentFixture<LayoutallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
