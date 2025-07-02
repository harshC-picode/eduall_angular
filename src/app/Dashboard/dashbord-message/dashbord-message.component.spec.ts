import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordMessageComponent } from './dashbord-message.component';

describe('DashbordMessageComponent', () => {
  let component: DashbordMessageComponent;
  let fixture: ComponentFixture<DashbordMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
