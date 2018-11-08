import {
  Component,
  ComponentFactoryResolver,
  Type,
  ViewChild,
  ViewContainerRef,
  InjectionToken,
  Inject,
  Optional
} from '@angular/core';
import { NguAlert, NguAlertConfig } from './ngu-alert';
import { NguAlertMsgComponent } from './ngu-alert-msg/ngu-alert-msg.component';

export const NGU_ALERT_CONFIG = new InjectionToken<NguAlertConfig>(
  'nguAlert.config'
);

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngu-alert',
  templateUrl: './ngu-alert.component.html',
  styleUrls: ['./ngu-alert.component.scss']
})
export class NguAlertComponent {
  @ViewChild('alertBtmRight', { read: ViewContainerRef })
  BottomRight: ViewContainerRef;
  @ViewChild('alertBtmLeft', { read: ViewContainerRef })
  BottomLeft: ViewContainerRef;
  @ViewChild('alertTopLeft', { read: ViewContainerRef })
  TopLeft: ViewContainerRef;
  @ViewChild('alertTopRight', { read: ViewContainerRef })
  TopRight: ViewContainerRef;
  @ViewChild('alertBtmCenter', { read: ViewContainerRef })
  BottomCenter: ViewContainerRef;
  @ViewChild('alertTopCenter', { read: ViewContainerRef })
  TopCenter: ViewContainerRef;

  // Keep track of list of generated components for removal purposes

  private data: NguAlertConfig = {
    defaultPosition: 'BottomCenter',
    duration: 5000
  };

  dynamicComp = NguAlertMsgComponent;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    @Optional()
    @Inject(NGU_ALERT_CONFIG)
    config: NguAlertConfig
  ) {
    this.assignCustom(config);
  }

  public subscribeAlert(data: NguAlert) {
    data.duration =
      typeof data.duration === 'number' ? data.duration : this.data.duration;

    this.addComponent(this.dynamicComp, data);
  }

  private addComponent(
    componentClass: Type<NguAlertMsgComponent>,
    data: NguAlert
  ) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      componentClass
    );
    const component = (<ViewContainerRef>(
      this[data.position || this.data.defaultPosition]
    )).createComponent(componentFactory);

    component.instance.data = data;
    component.instance.componentRef = component;
  }

  assignCustom(data: NguAlertConfig) {
    if (!data) {
      return;
    }

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key];
        this.data[key] = element;
      }
    }
  }

  clearAll() {
    [
      this.BottomCenter,
      this.BottomLeft,
      this.BottomRight,
      this.TopCenter,
      this.TopLeft,
      this.TopRight
    ].forEach(element => {
      element.clear();
    });
  }
}
