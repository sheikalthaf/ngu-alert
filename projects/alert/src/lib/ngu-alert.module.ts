import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguAlertComponent } from './ngu-alert.component';
import { NguAlertMsgComponent } from './ngu-alert-msg/ngu-alert-msg.component';
import { DomService } from './dom.service';

@NgModule({
  imports: [CommonModule],
  declarations: [NguAlertComponent, NguAlertMsgComponent],
  exports: [NguAlertComponent],
  entryComponents: [NguAlertComponent, NguAlertMsgComponent],
  providers: [DomService]
})
export class NguAlertModule {}
