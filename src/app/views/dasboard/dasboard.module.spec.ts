import { DasboardModule } from './dasboard.module';

describe('DasboardModule', () => {
  let dasboardModule: DasboardModule;

  beforeEach(() => {
    dasboardModule = new DasboardModule();
  });

  it('should create an instance', () => {
    expect(dasboardModule).toBeTruthy();
  });
});
