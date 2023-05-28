import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTenHeaderComponent } from './home-ten-header.component';

describe('HomeTenHeaderComponent', () => {
  let component: HomeTenHeaderComponent;
  let fixture: ComponentFixture<HomeTenHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTenHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
