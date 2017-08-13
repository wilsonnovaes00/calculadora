import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  //declaration of values

  private n1:         string;
  private n2:         string;
  private result:     number;
  private operation:  string;
  


  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit() {
    this.clean()
  }
  clean(): void{
    this.n1         = '0';
    this.n2         = null;
    this.result     = null;
    this.operation  = null;
  }
  addNumber(number: string):void {

    if(this.operation === null){
      this.n1 = this.concatNumber(this.n1, number);
    }else{
      this.n2 = this.concatNumber(this.n2, number);
      
    }
  }
  concatNumber(numberOne:string, numberConcat: string): string{
    if(numberOne === '0' || numberOne === null){
      numberOne = ''
    }

    if(numberConcat === '.' && numberOne === ''){
      return '0.';
    }

    if(numberConcat === '.' && numberOne.indexOf('.') > -1){
      return numberOne;
    }
    return numberOne + numberConcat;

  }

  AddOperation(operation: string): void{
    if(this.operation === null){
      this.operation = operation;
      return;
    }
    if(this.n2 !== null){
      this.result = this.calculadoraService.calculate(
        parseFloat(this.n1),
        parseFloat(this.n2),
        this.operation);

        this.operation = operation;
        this.n1 = this.result.toString();
        this.n2 = null;
        this.result = null;

    }
  }

  caculate(): void{
    if(this.n2 === null){return}

    this.result = this.calculadoraService.calculate(
        parseFloat(this.n1),
        parseFloat(this.n2),
        this.operation);
  }
  
  get display(): string{
    if(this.result !== null){
      return this.result.toString();
    }
    if(this.n2 !== null){
      return this.n2;
    }
    return this.n1;
  }


  

}
