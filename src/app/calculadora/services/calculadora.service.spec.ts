import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
  });

  it('should be created', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service).toBeTruthy();
  }));

  it('should be to subtration two values 1 - 1 = 0', inject([CalculadoraService], (service: CalculadoraService) => {
    let sub = service.calculate(1,1, CalculadoraService.SUBTRACTION);
    expect(sub).toEqual(0);
  }));

   it('should be to division two values 1 / 1 = 1', inject([CalculadoraService], (service: CalculadoraService) => {
     let div = service.calculate(1,1, CalculadoraService.DIVISION);
     expect(div).toEqual(1);
  }));

  it('should be to multiplication two values 2 * 5 = 10', inject([CalculadoraService], (service: CalculadoraService) => {
    let mult = service.calculate(2,5, CalculadoraService.MULTIPLICATION);
     expect(mult).toEqual(10);
  }));


});
