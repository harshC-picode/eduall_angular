import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogClassicComponent } from './blog-classic.component';

describe('BlogClassicComponent', () => {
  let component: BlogClassicComponent;
  let fixture: ComponentFixture<BlogClassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogClassicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
