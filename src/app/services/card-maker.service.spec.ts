import { TestBed } from '@angular/core/testing';

import { CardMakerService } from './card-maker.service';

describe('CardMakerService', () => {
  let service: CardMakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardMakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
