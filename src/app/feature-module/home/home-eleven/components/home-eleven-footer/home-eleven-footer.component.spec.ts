import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeElevenFooterComponent } from './home-eleven-footer.component';

describe('HomeElevenFooterComponent', () => {
  let component: HomeElevenFooterComponent;
  let fixture: ComponentFixture<HomeElevenFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeElevenFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeElevenFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
