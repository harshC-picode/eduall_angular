import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layoutall3Component } from './layoutall3.component';

describe('Layoutall3Component', () => {
  let component: Layoutall3Component;
  let fixture: ComponentFixture<Layoutall3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layoutall3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Layoutall3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
