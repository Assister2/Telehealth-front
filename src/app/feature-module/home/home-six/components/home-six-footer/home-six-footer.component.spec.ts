import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSixFooterComponent } from './home-six-footer.component';

describe('HomeSixFooterComponent', () => {
  let component: HomeSixFooterComponent;
  let fixture: ComponentFixture<HomeSixFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSixFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSixFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
