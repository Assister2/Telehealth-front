import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeElevenHeaderComponent } from './home-eleven-header.component';

describe('HomeElevenHeaderComponent', () => {
  let component: HomeElevenHeaderComponent;
  let fixture: ComponentFixture<HomeElevenHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeElevenHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeElevenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
