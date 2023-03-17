import { TestBed } from '@angular/core/testing';

import { QueryCepService } from './query-cep.service';

describe('QueryCepService', () => {
  let service: QueryCepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryCepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
