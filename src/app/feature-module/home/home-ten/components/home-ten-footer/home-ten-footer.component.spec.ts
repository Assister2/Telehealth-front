import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTenFooterComponent } from './home-ten-footer.component';

describe('HomeTenFooterComponent', () => {
  let component: HomeTenFooterComponent;
  let fixture: ComponentFixture<HomeTenFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTenFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTenFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
