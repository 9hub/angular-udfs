import { TestBed } from '@angular/core/testing';

import { AngularUdfService } from './angular-udf.service';

describe('AngularUdfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularUdfService = TestBed.get(AngularUdfService);
    expect(service).toBeTruthy();
  });
});
