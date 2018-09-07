import { NguAlertModule } from './ngu-alert.module';

describe('NguAlertModule', () => {
  let nguAlertModule: NguAlertModule;

  beforeEach(() => {
    nguAlertModule = new NguAlertModule();
  });

  it('should create an instance', () => {
    expect(nguAlertModule).toBeTruthy();
  });
});
