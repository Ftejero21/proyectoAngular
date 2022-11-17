import { TestBed } from '@angular/core/testing';

import { PeliculaServicioService } from './pelicula-servicio.service';

describe('PeliculaServicioService', () => {
  let service: PeliculaServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculaServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
