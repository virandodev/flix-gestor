import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';


@Component({
  selector: 'app-series-lista',
  imports: [MatExpansionModule],
  templateUrl: './series-lista.component.html',
  styleUrl: './series-lista.component.css'
})
export class SeriesListaComponent {
  serieExemplo = {
    'nome': 'Os Simpsons',
    'descricao': 'Bart, O Assassino',
    'streaming': 'Netflix'
  }

}
