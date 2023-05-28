import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEightFooterComponent } from './home-eight-footer.component';

describe('HomeEightFooterComponent', () => {
  let component: HomeEightFooterComponent;
  let fixture: ComponentFixture<HomeEightFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEightFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEightFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
