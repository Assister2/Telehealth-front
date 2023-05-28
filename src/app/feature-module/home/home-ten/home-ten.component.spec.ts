import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTenComponent } from './home-ten.component';

describe('HomeTenComponent', () => {
  let component: HomeTenComponent;
  let fixture: ComponentFixture<HomeTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
