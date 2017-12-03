import { NguAlert, NguAlertData } from './../ngu-alert';
import { Component, OnInit, Input, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngu-alert',
  templateUrl: './ngu-alert.component.html',
  styleUrls: ['./ngu-alert.component.scss'],
  animations: [
    trigger('alertAnimation', [
        transition('* => 1', [
            style({
                transform: 'translateX(110%)'
            }),
            animate('.3s ease-in-out', style({
                transform: 'translateX(0%)'
            }))
        ]),
        transition('1 => 0', [
          style({
                transform: 'translateX(0%)'
            }),
            animate('.3s ease-in-out', style({
                transform: 'translateX(110%)'
            }))
        ])
    ])
  ]
})
export class NguAlertComponent implements OnInit, NguAlertData {
  @Input() data: NguAlert;

  aniState: number;
  iconSet: {};
  @HostListener('click')
  destroyAlert() {
    this.aniState = 0;
    setTimeout(() => {
      this.data.comp.destroy();
    }, 310);
  }

  constructor() {}

  ngOnInit() {
    this.iconSet = {
      success: 'fa-check',
      danger: 'fa-times',
      info: 'fa-info-circle'
    };
    this.aniState = 1;
    this.data.duration !== 0 && this.timeOutFn();
  }

    private timeOutFn() {
        setTimeout(() => {
            this.destroyAlert();
        }, this.data.duration || 5000);
    }
}
