import { TestBed } from '@angular/core/testing';

import { ScreenConfService } from './screen-conf.service';

describe('ScreenConfService', () => {
  let service: ScreenConfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenConfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
