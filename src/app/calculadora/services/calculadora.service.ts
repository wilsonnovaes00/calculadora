import { Injectable } from '@angular/core';

@Injectable()
export class CalculadoraService {
 
  //Declaration of constant
 static readonly SUM:             string = '+';
 static readonly SUBTRACTION:     string = '-';
 static readonly DIVISION:        string = '/';
 static readonly MULTIPLICATION:  string = '*';

  constructor() { }

  calculate(n1:number, n2:number, operation:string): number{
    let result: number;

    switch (operation) {
      case CalculadoraService.SUM:
        result = n1 + n2;
        break;
      case CalculadoraService.SUBTRACTION:
        result = n1 - n2;
        break;  
      case CalculadoraService.DIVISION:
        result = n1 / n2;
        break;
      case CalculadoraService.MULTIPLICATION:
        result = n1 / n2;
        break;
      default:
       result = 0;
    }
      return result;

  }
}
