import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOnlineClassComponent } from './book-online-class.component';

describe('BookOnlineClassComponent', () => {
  let component: BookOnlineClassComponent;
  let fixture: ComponentFixture<BookOnlineClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookOnlineClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookOnlineClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
