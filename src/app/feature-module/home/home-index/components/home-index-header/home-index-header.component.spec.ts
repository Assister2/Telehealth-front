import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIndexHeaderComponent } from './home-index-header.component';

describe('HomeIndexHeaderComponent', () => {
  let component: HomeIndexHeaderComponent;
  let fixture: ComponentFixture<HomeIndexHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeIndexHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIndexHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
