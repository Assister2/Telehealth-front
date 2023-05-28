import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFourteenComponent } from './home-fourteen.component';

describe('HomeFourteenComponent', () => {
  let component: HomeFourteenComponent;
  let fixture: ComponentFixture<HomeFourteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFourteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
