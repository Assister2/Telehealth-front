import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEightHeaderComponent } from './home-eight-header.component';

describe('HomeEightHeaderComponent', () => {
  let component: HomeEightHeaderComponent;
  let fixture: ComponentFixture<HomeEightHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEightHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEightHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
