import { TestBed } from '@angular/core/testing';

import { UserCrdService } from './user-crd.service';

describe('UserCrdService', () => {
  let service: UserCrdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCrdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
