import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layoutall4Component } from './layoutall4.component';

describe('Layoutall4Component', () => {
  let component: Layoutall4Component;
  let fixture: ComponentFixture<Layoutall4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layoutall4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Layoutall4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
