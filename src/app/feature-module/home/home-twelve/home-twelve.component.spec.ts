import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTwelveComponent } from './home-twelve.component';

describe('HomeTwelveComponent', () => {
  let component: HomeTwelveComponent;
  let fixture: ComponentFixture<HomeTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTwelveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
