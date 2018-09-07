import { Component } from '@angular/core';
import { NguAlertService } from 'alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngu-alert';
  constructor(private alert: NguAlertService) {
    this.alert.open({
      heading: 'This is a Heading',
      msg: 'This is a body content with more details about the alert',
      type: 'success'
    });
  }
}
