import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFourteenHeaderComponent } from './home-fourteen-header.component';

describe('HomeFourteenHeaderComponent', () => {
  let component: HomeFourteenHeaderComponent;
  let fixture: ComponentFixture<HomeFourteenHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFourteenHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFourteenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
