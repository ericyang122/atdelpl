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

  constructor(public router: Router) {} // Adicionando Router ao construtor

  calcularPrestacao() {
    if (this.valordaprestacao > 0 && this.TaxaJuros > 0 && this.atrasoMeses > 0) {
      this.somatotal = this.valordaprestacao * Math.pow((1 + this.TaxaJuros / 100), this.atrasoMeses);
      
      // Navegar para a nova página com a ordem correta dos parâmetros
      this.router.navigate(['/tela-confirmar', this.somatotal, this.atrasoMeses, this.TaxaJuros, this.valordaprestacao])
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
