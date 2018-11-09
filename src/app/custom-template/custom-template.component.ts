import {
  Component,
  OnInit,
  Input,
  HostListener,
  ComponentRef
} from '@angular/core';
import { NguAlert } from '../../../projects/alert/src/public_api';
import { alertAnimations } from '../../../projects/alert/src/lib/ngu-alert-msg/ngu-alert.animation';

@Component({
  selector: 'app-custom-template',
  templateUrl: './custom-template.component.html',
  styleUrls: ['./custom-template.component.scss'],
  animations: [alertAnimations.alertAnimation2],
  host: {
    '[@alertAnimation]': '{}'
  }
})
export class CustomTemplateComponent {
  @Input() data: NguAlert;

  componentRef: ComponentRef<CustomTemplateComponent>;

  iconSet = {
    success: 'fa-check',
    danger: 'fa-times',
    info: 'fa-info-circle'
  };

  @HostListener('click')
  destroyAlert() {
    this.componentRef.destroy();
  }
}
