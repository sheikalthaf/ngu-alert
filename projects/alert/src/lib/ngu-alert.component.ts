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
import { NguAlertMsgComponent } from './ngu-alert-msg.component';

export const NGU_ALERT_CONFIG = new InjectionToken<NguAlertConfig>('nguAlert.config');

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
    duration: 5000,
    customTemplate: NguAlertMsgComponent
  };

  // dynamicComp = NguAlertMsgComponent;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    @Optional()
    @Inject(NGU_ALERT_CONFIG)
    config: NguAlertConfig
  ) {
    this.assignCustom(config);
  }

  public subscribeAlert(data: NguAlert, template: any) {
    const d = Number(data.duration);
    data.duration = isNaN(d) ? this.data.duration : d;

    this.addComponent(this.data.customTemplate, data, template);
  }

  private addComponent(componentClass: Type<NguAlertMsgComponent>, data: NguAlert, template: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
    const component = (<ViewContainerRef>(
      this[data.position || this.data.defaultPosition]
    )).createComponent(componentFactory);

    component.instance.data = data;
    component.instance.content = template;
    component.instance.componentRef = component;
    this.timeOutFn(component, data);
  }

  assignCustom(data: NguAlertConfig) {
    if (!data) return;

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key];
        this.data[key] = element;
      }
    }
  }

  private timeOutFn(componentRef, data) {
    if (data.duration === 0) return;

    setTimeout(() => this.destroyAlert(componentRef), data.duration);
  }

  destroyAlert(componentRef) {
    componentRef.destroy();
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
