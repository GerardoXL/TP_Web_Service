import { TestBed } from '@angular/core/testing';

import { BuscarMusicaService } from './buscar-musica.service';

describe('BuscarMusicaService', () => {
  let service: BuscarMusicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarMusicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
