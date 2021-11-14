import { TestBed } from '@angular/core/testing';

import { TokenBalanceService } from './token-balance.service';

describe('TokenBalanceService', () => {
  let service: TokenBalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenBalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
