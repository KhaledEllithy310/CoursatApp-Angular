import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { sharedRoutesGuard } from './shared-routes.guard';

describe('sharedRoutesGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sharedRoutesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
