import {
  Component,
  OnInit,
  Input,
  HostListener,
  ComponentRef
} from '@angular/core';
import { NguAlert } from '../ngu-alert';
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
  data: NguAlert;
  componentRef: ComponentRef<NguAlertMsgComponent>;

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
    console.log(this.data.duration);
    if (this.data.duration !== 0) {
      this.timeOutFn();
    }
  }

  private timeOutFn() {
    setTimeout(() => {
      this.destroyAlert();
    }, this.data.duration);
  }
}
