import { TestBed } from '@angular/core/testing';

import { IncidentReportedService } from './incident-reported.service';

describe('IncidentReportedService', () => {
  let service: IncidentReportedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidentReportedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
