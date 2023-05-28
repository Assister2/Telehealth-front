import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSixHeaderComponent } from './home-six-header.component';

describe('HomeSixHeaderComponent', () => {
  let component: HomeSixHeaderComponent;
  let fixture: ComponentFixture<HomeSixHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSixHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSixHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
