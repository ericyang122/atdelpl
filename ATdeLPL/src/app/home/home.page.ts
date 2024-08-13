import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  valordaprestacao: number = 0;
  TaxaJuros: number = 0;
  atrasoMeses: number = 0;
  somatotal: number = 0;

  calcularPrestacao() {

    if (this.valordaprestacao > 0 && this.TaxaJuros > 0 && this.atrasoMeses > 0) {

      this.somatotal = this.valordaprestacao * Math.pow((1 + this.TaxaJuros / 100), this.atrasoMeses);
    } else {
    
      this.somatotal = 0;
      console.error("Valores inválidos. Certifique-se de que a prestação, taxa de juros e meses de atraso são maiores que 0.");
    }
  }

  pinFormatterJuros(value: number) {
    return `${value}%`;
  }

  pinFormatterAtraso(value: number) {
    return `${value}`;
  }

}
