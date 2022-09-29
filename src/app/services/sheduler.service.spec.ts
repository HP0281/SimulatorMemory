import { TestBed } from '@angular/core/testing';

import { ShedulerService } from './sheduler.service';

describe('ShedulerService', () => {
  let service: ShedulerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShedulerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
