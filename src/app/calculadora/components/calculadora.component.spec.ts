import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../services/';
import { By } from '@angular/platform-browser';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ],
      providers:[CalculadoraService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be click on box 7 + 3 = 10', () => {
    let btn7        = fixture.debugElement.query(By.css('#btn7'));
    let sum         = fixture.debugElement.query(By.css('#btnSoma'));
    let btn3        = fixture.debugElement.query(By.css('#btn3'));
    let calculate   = fixture.debugElement.query(By.css('#btnCalcular'));
    let display     = fixture.debugElement.query(By.css('#display'));
    
    btn7.triggerEventHandler('click', null);
    fixture.detectChanges();
    
    sum.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();
    
    calculate.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('10')
  })

});
