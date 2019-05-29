import { TestBed } from '@angular/core/testing';

import { SbComponentsService } from './sb-components.service';

describe('SbComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SbComponentsService = TestBed.get(SbComponentsService);
    expect(service).toBeTruthy();
  });
});
