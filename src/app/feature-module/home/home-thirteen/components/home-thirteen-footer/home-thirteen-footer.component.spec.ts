import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeThirteenFooterComponent } from './home-thirteen-footer.component';

describe('HomeThirteenFooterComponent', () => {
  let component: HomeThirteenFooterComponent;
  let fixture: ComponentFixture<HomeThirteenFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeThirteenFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeThirteenFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
