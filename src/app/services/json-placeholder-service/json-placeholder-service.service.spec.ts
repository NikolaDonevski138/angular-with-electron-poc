import { TestBed } from '@angular/core/testing';

import { JsonPlaceholderServiceService } from './json-placeholder-service.service';

describe('JsonPlaceholderServiceService', () => {
  let service: JsonPlaceholderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonPlaceholderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
