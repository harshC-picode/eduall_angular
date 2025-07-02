import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layoutall2Component } from './layoutall2.component';

describe('Layoutall2Component', () => {
  let component: Layoutall2Component;
  let fixture: ComponentFixture<Layoutall2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layoutall2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Layoutall2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
