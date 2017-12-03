import { Subscription } from 'rxjs/Subscription';
import { NguAlertService } from './../ngu-alert.service';
import { NguAlertData, NguAlert } from './../ngu-alert';
import { NguAlertComponent } from './../ngu-alert/ngu-alert.component';
import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  Type,
  ViewChild,
  ViewContainerRef,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'ngu-alert-main',
  templateUrl: './ngu-main.component.html',
  styleUrls: ['./ngu-main.component.scss']
})
export class NguMainComponent implements OnInit, OnDestroy {
  alertSub: Subscription;

  @ViewChild('alert', { read: ViewContainerRef })
  container: ViewContainerRef;

  // Keep track of list of generated components for removal purposes
  components = [];
  dynamicComp = NguAlertComponent;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private alert: NguAlertService
  ) {}

  ngOnInit() {
    this.subscribeAlert();
  }

  private subscribeAlert() {
    this.alertSub = this.alert.alertTrigger.subscribe(data => {
      // console.log(data);
      this.addComponent(this.dynamicComp, data);
    });
  }

  ngOnDestroy() {
    this.alertSub.unsubscribe();
  }

  addComponent(componentClass: Type<any>, data: NguAlert) {
    // Create component dynamically inside the ng-template
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      componentClass
    );
    const component = this.container.createComponent(componentFactory);

    data['comp'] = component;
    (<NguAlertData>component.instance).data = data;

    // Push the component so that we can keep track of which components are created
    // this.components.push(component);
    // return component;
  }
}
