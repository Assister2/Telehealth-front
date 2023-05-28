import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTwelveFooterComponent } from './home-twelve-footer.component';

describe('HomeTwelveFooterComponent', () => {
  let component: HomeTwelveFooterComponent;
  let fixture: ComponentFixture<HomeTwelveFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTwelveFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTwelveFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
