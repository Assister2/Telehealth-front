import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNineHeaderComponent } from './home-nine-header.component';

describe('HomeNineHeaderComponent', () => {
  let component: HomeNineHeaderComponent;
  let fixture: ComponentFixture<HomeNineHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNineHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNineHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
