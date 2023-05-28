import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFourteenFooterComponent } from './home-fourteen-footer.component';

describe('HomeFourteenFooterComponent', () => {
  let component: HomeFourteenFooterComponent;
  let fixture: ComponentFixture<HomeFourteenFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFourteenFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFourteenFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
