import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIndexFooterComponent } from './home-index-footer.component';

describe('HomeIndexFooterComponent', () => {
  let component: HomeIndexFooterComponent;
  let fixture: ComponentFixture<HomeIndexFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeIndexFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIndexFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
