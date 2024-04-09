import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor-jagf',
  templateUrl: './convertidor-jagf.component.html',
  styleUrls: ['./convertidor-jagf.component.css']
})
export class ConvertidorJagfComponent implements OnInit {
  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;

  monedas: string[] = ['USD','EUR','LIBRA','MX','JPY','CAD','CNY','RUB','ARS','INR']

  constructor() { }

  ngOnInit(): void {
  }

  convertir(): void{
    //console.log('Llamada al modulo convertir');
    switch(this.tengo){
      case 'USD':
        if(this.quiero === 'USD'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.92;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.78;
        }
        if(this.quiero === 'MX'){
          this.total = this.cantidad * 16.8;
        }
        if(this.quiero === 'JPY'){
          this.total = this.cantidad * 147.36;
        }
        if(this.quiero === 'CAD'){
          this.total = this.cantidad * 1.35;
        }
        if(this.quiero === 'CNY'){
          this.total = this.cantidad * 7.18;
        }
        if(this.quiero === 'RUB'){
          this.total = this.cantidad * 90.69;
        }
        if(this.quiero === 'ARS'){
          this.total = this.cantidad * 848.25;
        }
        if(this.quiero === 'INR'){
          this.total = this.cantidad * 82.75;
        }
        break;
      case 'EUR':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.09;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.85;
        }
        if(this.quiero === 'MX'){
          this.total = this.cantidad * 23.5;
        }
        if(this.quiero === 'JPY'){
          this.total = this.cantidad * 130.5;
        }
        if(this.quiero === 'CAD'){
          this.total = this.cantidad * 1.5;
        }
        if(this.quiero === 'CNY'){
          this.total = this.cantidad * 7.8;
        }
        if(this.quiero === 'RUB'){
          this.total = this.cantidad * 90.5;
        }
        if(this.quiero === 'ARS'){
          this.total = this.cantidad * 927.54;
        }
        if(this.quiero === 'INR'){
          this.total = this.cantidad * 90.5;
        }
        break;
      case 'LIBRA':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.28;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 1.17;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'MX'){
          this.total = this.cantidad * 21.55;
        }
        if(this.quiero === 'JPY'){
          this.total = this.cantidad * 188.65;
        }
        if(this.quiero === 'CAD'){
          this.total = this.cantidad * 1.72;
        }
        if(this.quiero === 'CNY'){
          this.total = this.cantidad * 9.2;
        }
        if(this.quiero === 'RUB'){
          this.total = this.cantidad * 116.22;
        }
        if(this.quiero === 'ARS'){
          this.total = this.cantidad * 1087.06;
        }
        if(this.quiero === 'INR'){
          this.total = this.cantidad * 106.07;
        }
        break;
      case 'MX':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * .06;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.054;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.46;
        }
        if(this.quiero === 'MX'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'JPY'){
          this.total = this.cantidad * 8.77;
        }
        if(this.quiero === 'CAD'){
          this.total = this.cantidad * 0.08;
        }
        if(this.quiero === 'CNY'){
          this.total = this.cantidad * 0.42;
        }
        if(this.quiero === 'RUB'){
          this.total = this.cantidad * 5.40;
        }
        if(this.quiero === 'ARS'){
          this.total = this.cantidad * 50.50;
        }
        if(this.quiero === 'INR'){
          this.total = this.cantidad * 4.93;
        }
        break;
      case 'JPY':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 0.0068;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.0062;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.053;
        }
        if(this.quiero === 'MX'){
          this.total = this.cantidad * 0.11;
        }
        if(this.quiero === 'JPY'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'CAD'){
          this.total = this.cantidad * 0.0091;
        }
        if(this.quiero === 'CNY'){
          this.total = this.cantidad * 0.049;
        }
        if(this.quiero === 'RUB'){
          this.total = this.cantidad * 0.62;
        }
        if(this.quiero === 'ARS'){
          this.total = this.cantidad * 5.76;
        }
        if(this.quiero === 'INR'){
          this.total = this.cantidad * 0.56;
        }
        break;
      case 'CAD':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 0.74;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.68;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.58;
        }
        if(this.quiero === 'MX'){
          this.total = this.cantidad * 12.47;
        }
        if(this.quiero === 'JPY'){
          this.total = this.cantidad * 109.40;
        }
        if(this.quiero === 'CAD'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'CNY'){
          this.total = this.cantidad *  5.26;
        }
        if(this.quiero === 'RUB'){
          this.total = this.cantidad * 67.31;
        }
        if(this.quiero === 'ARS'){
          this.total = this.cantidad * 629.62;
        }
        if(this.quiero === 'INR'){
          this.total = this.cantidad * 61.42;
        }
        break;
      case 'CNY':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 0.14;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.13;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 11;
        }
        if(this.quiero === 'MX'){
          this.total = this.cantidad * 2.34;
        }
        if(this.quiero === 'JPY'){
          this.total = this.cantidad * 20.54;
        }
        if(this.quiero === 'CAD'){
          this.total = this.cantidad * 0.19;
        }
        if(this.quiero === 'CNY'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'RUB'){
          this.total = this.cantidad * 12.83;
        }
        if(this.quiero === 'ARS'){
          this.total = this.cantidad * 118.20;
        }
        if(this.quiero === 'INR'){
          this.total = this.cantidad * 11.827;
        }
        break;
      case 'RUB':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 0.011;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.010;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.0086;
        }
        if(this.quiero === 'MX'){
          this.total = this.cantidad * 0.18;
        }
        if(this.quiero === 'JPY'){
          this.total = this.cantidad * 1.62;
        }
        if(this.quiero === 'CAD'){
          this.total = this.cantidad * 0.015;
        }
        if(this.quiero === 'CNY'){
          this.total = this.cantidad * 0.079;
        }
        if(this.quiero === 'RUB'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'ARS'){
          this.total = this.cantidad * 9.34;
        }
        if(this.quiero === 'INR'){
          this.total = this.cantidad * 0.91;
        }
        break;
      case 'ARS':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 0.0012;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.0011;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.00092;
        }
        if(this.quiero === 'MX'){
          this.total = this.cantidad * 0.020;
        }
        if(this.quiero === 'JPY'){
          this.total = this.cantidad * 0.17;
        }
        if(this.quiero === 'CAD'){
          this.total = this.cantidad * 0.0016;
        }
        if(this.quiero === 'CNY'){
          this.total = this.cantidad * 0.0085;
        }
        if(this.quiero === 'RUB'){
          this.total = this.cantidad * 0.11;
        }
        if(this.quiero === 'ARS'){
          this.total = this.cantidad * 0.9; 
        }
        if(this.quiero === 'INR'){
          this.total = this.cantidad * 0.098;
        }
        break;
      case 'INR':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 0.012;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.011;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.0094;
        }
        if(this.quiero === 'MX'){
          this.total = this.cantidad * 0.20;
        }
        if(this.quiero === 'JPY'){
          this.total = this.cantidad * 1.78;
        }
        if(this.quiero === 'CAD'){
          this.total = this.cantidad * 0.016;
        }
        if(this.quiero === 'CNY'){
          this.total = this.cantidad * 0.87;
        }
        if(this.quiero === 'RUB'){
          this.total = this.cantidad * 1.10;
        }
        if(this.quiero === 'ARS'){
          this.total = this.cantidad * 10.25;
        }
        if(this.quiero === 'INR'){
          this.total = this.cantidad;
        }
        break;
    }
  }

}
