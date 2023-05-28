import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeThirteenHeaderComponent } from './home-thirteen-header.component';

describe('HomeThirteenHeaderComponent', () => {
  let component: HomeThirteenHeaderComponent;
  let fixture: ComponentFixture<HomeThirteenHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeThirteenHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeThirteenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
