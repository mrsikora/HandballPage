import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMainPageComponent } from './popup-main-page.component';

describe('PopupMainPageComponent', () => {
  let component: PopupMainPageComponent;
  let fixture: ComponentFixture<PopupMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
