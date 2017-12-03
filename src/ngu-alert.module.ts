import { NguMainComponent } from './main/ngu-main.component';
import { NguAlertService } from './ngu-alert.service';
import { NguAlertComponent } from './ngu-alert/ngu-alert.component';
import { NgModule, ModuleWithProviders } from '@angular/core';

export const alertService = new NguAlertService();

@NgModule({
  imports: [],
  exports: [NguMainComponent],
  declarations: [NguAlertComponent, NguMainComponent],
  providers: [{ provide: NguAlertService, useValue: alertService }],
  entryComponents: [NguAlertComponent]
})
export class NguAlertModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NguAlertModule,
      providers: [{ provide: NguAlertService, useValue: alertService }]
    };
  }
}
