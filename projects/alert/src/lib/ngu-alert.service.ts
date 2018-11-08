import { ComponentRef, Injectable } from '@angular/core';
import { DomService } from './dom.service';
import { NguAlert } from './ngu-alert';
import { NguAlertComponent } from './ngu-alert.component';

@Injectable({
  providedIn: 'root'
})
export class NguAlertService {
  componentRef: ComponentRef<NguAlertComponent>;

  constructor(private dom: DomService) {
    this.componentRef = this.dom.appendComponentToBody(NguAlertComponent);
  }

  open(data: NguAlert) {
    this.componentRef.instance.subscribeAlert(data);
  }

  clearAll() {
    this.componentRef.instance.clearAll();
  }
}
