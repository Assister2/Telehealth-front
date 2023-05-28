import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTwelveHeaderComponent } from './home-twelve-header.component';

describe('HomeTwelveHeaderComponent', () => {
  let component: HomeTwelveHeaderComponent;
  let fixture: ComponentFixture<HomeTwelveHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTwelveHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTwelveHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
