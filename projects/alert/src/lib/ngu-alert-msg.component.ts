import { Component, OnInit, Input, HostListener, ComponentRef } from '@angular/core';
import { NguAlert, NguAlertContentType } from './ngu-alert';
import { alertAnimations } from './ngu-alert.animation';

@Component({
  selector: 'lib-ngu-alert-msg',
  templateUrl: './ngu-alert-msg.component.html',
  styleUrls: ['./ngu-alert-msg.component.scss'],
  animations: [alertAnimations.alertAnimation2],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@alertAnimation]': '{}'
  }
})
export class NguAlertMsgComponent implements OnInit {
  @Input()
  set data(d: NguAlert) {
    this.context = {
      $implicit: d
    };
  }
  componentRef: ComponentRef<NguAlertMsgComponent>;
  content: any;
  context: any;
  renderMethod: NguAlertContentType = 'template';

  iconSet: {};
  @HostListener('click')
  destroyAlert() {
    this.componentRef.destroy();
  }

  constructor() {}

  ngOnInit() {
    this.iconSet = {
      success: 'fa-check',
      danger: 'fa-times',
      info: 'fa-info-circle'
    };
  }
}
