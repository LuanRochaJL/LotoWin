/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApostaService } from './aposta.service';

describe('Service: Aposta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApostaService]
    });
  });

  it('should ...', inject([ApostaService], (service: ApostaService) => {
    expect(service).toBeTruthy();
  }));
});
