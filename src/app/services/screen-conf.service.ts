import { Injectable } from '@angular/core';

@Injectable()
export abstract class IConfig {
  mobile: number;
  tablet: number;
}

@Injectable()
export class ScreenConfService {
  config: IConfig;

  constructor(private configX: IConfig) {
    this.config = configX;
  }
}

export function provideMyService(config: IConfig) {
  return () => new ScreenConfService(config);
}
