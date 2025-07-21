import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDropdown2Component } from './category-dropdown2.component';

describe('CategoryDropdown2Component', () => {
  let component: CategoryDropdown2Component;
  let fixture: ComponentFixture<CategoryDropdown2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryDropdown2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryDropdown2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
