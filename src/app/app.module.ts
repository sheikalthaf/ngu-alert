import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  NguAlertModule,
  NGU_ALERT_CONFIG,
  NguAlertConfig
} from '../../projects/alert/src/public_api';
import { CustomTemplateComponent } from './custom-template/custom-template.component';

const config: NguAlertConfig = {
  defaultPosition: 'BottomRight',
  duration: 1000,
  customTemplate: CustomTemplateComponent
};

@NgModule({
  declarations: [AppComponent, CustomTemplateComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NguAlertModule],
  providers: [{ provide: NGU_ALERT_CONFIG, useValue: config }],
  entryComponents: [CustomTemplateComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
