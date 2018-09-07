import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguAlertMsgComponent } from './ngu-alert-msg.component';

describe('NguAlertMsgComponent', () => {
  let component: NguAlertMsgComponent;
  let fixture: ComponentFixture<NguAlertMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguAlertMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguAlertMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
