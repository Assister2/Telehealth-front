import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNineFooterComponent } from './home-nine-footer.component';

describe('HomeNineFooterComponent', () => {
  let component: HomeNineFooterComponent;
  let fixture: ComponentFixture<HomeNineFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNineFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNineFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
