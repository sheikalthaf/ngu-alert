import { Component } from '@angular/core';
import { NguAlertService } from '../../projects/alert/src/public_api';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngu-alert';
  form: FormGroup;
  constructor(public alert: NguAlertService, private fb: FormBuilder) {
    this.form = this.fb.group({
      heading: 'This is a Heading',
      body: 'This is a body content with more details about the alert',
      type: 'success',
      duration: 5000
    });
    // this.openAlerts();
  }

  private openAlerts() {
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

  openAlert() {
    const d = this.form.value;
    this.alert.open({
      heading: d.heading,
      msg: d.body,
      type: d.type,
      duration: d.duration
    });
  }
}
