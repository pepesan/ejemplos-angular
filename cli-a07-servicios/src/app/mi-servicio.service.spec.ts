import { TestBed, inject } from '@angular/core/testing';

import { MiServicioService } from './mi-servicio.service';

describe('MiServicioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MiServicioService]
    });
  });

  it('should be created', inject([MiServicioService], (service: MiServicioService) => {
    expect(service).toBeTruthy();
  }));
});
