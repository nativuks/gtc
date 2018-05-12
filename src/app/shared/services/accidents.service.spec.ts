import { TestBed, inject } from '@angular/core/testing';

import { AccidentsService } from './accidents.service';

describe('AccidentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccidentsService]
    });
  });

  it('should be created', inject([AccidentsService], (service: AccidentsService) => {
    expect(service).toBeTruthy();
  }));
});
