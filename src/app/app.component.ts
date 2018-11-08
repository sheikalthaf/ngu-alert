import { Component } from '@angular/core';
import { NguAlertService } from '../../projects/alert/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngu-alert';
  constructor(public alert: NguAlertService) {
    [
      'BottomRight',
      'BottomLeft',
      'TopLeft',
      'TopRight',
      'BottomCenter',
      'TopCenter'
    ].forEach((positon: any, i) => {
      setTimeout(() => {
        this.alert.open({
          heading: 'This is a Heading',
          msg: 'This is a body content with more details about the alert',
          type: 'success',
          position: positon,
          duration: 0
        });
      }, i * 250);
    });
  }
}
