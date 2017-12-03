import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMainComponent } from './ngx-main.component';

describe('MainComponent', () => {
  let component: NgxMainComponent;
  let fixture: ComponentFixture<NgxMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
