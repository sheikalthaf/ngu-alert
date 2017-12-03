import { NguAlert } from './ngu-alert';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';


@Injectable()
export class NguAlertService {

  public alertTrigger = new Subject<NguAlert>();
  // public alertTrigger$ = this.alertTrigger.asObservable();

  constructor() { }

  open(data: NguAlert) {
    this.alertTrigger.next(data);
    // console.log('alertservice');
  }
}

