import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguAlertComponent } from './ngu-alert.component';

describe('NguAlertComponent', () => {
  let component: NguAlertComponent;
  let fixture: ComponentFixture<NguAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NguAlertComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
