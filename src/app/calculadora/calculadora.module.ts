import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[CalculadoraComponent],
  declarations: [CalculadoraComponent]
})
export class CalculadoraModule { }
