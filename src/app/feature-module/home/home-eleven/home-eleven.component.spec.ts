import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeElevenComponent } from './home-eleven.component';

describe('HomeElevenComponent', () => {
  let component: HomeElevenComponent;
  let fixture: ComponentFixture<HomeElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeElevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
