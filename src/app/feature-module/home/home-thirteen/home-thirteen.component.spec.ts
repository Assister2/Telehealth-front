import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeThirteenComponent } from './home-thirteen.component';

describe('HomeThirteenComponent', () => {
  let component: HomeThirteenComponent;
  let fixture: ComponentFixture<HomeThirteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeThirteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
