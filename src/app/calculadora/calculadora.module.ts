import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components';
import { CalculadoraService } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[CalculadoraComponent],
  providers:[CalculadoraService],
  declarations: [CalculadoraComponent]
})
export class CalculadoraModule { }
