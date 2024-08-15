import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importando Router

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valordaprestacao: number = 0;
  TaxaJuros: number = 0;
  atrasoMeses: number = 0;
  somatotal: number = 0;

  constructor(public router: Router) {} 
  calcularPrestacao() {
    if (i++ < this.atrasoMeses) {
       this.somatotal = this.valordaprestacao + (TaxaJuros/100)


      const somatotalFormatted = this.somatotal.toFixed(2);

      this.router.navigate(['/tela-confirmar', somatotalFormatted, this.atrasoMeses, this.TaxaJuros, this.valordaprestacao])
        .then(success => {
          if (success) {
            console.log('Navegação bem-sucedida!');
          } else {
            console.error('Falha na navegação.');
          }
        });
    } else {
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
