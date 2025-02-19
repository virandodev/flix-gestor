import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { FAKE_SERIES } from '../../fake-data';


@Component({
  selector: 'app-series-lista',
  imports: [MatExpansionModule],
  templateUrl: './series-lista.component.html',
  styleUrl: './series-lista.component.css'
})
export class SeriesListaComponent {
  serieExemplo = FAKE_SERIES[0];
  serieExemplo1 = FAKE_SERIES[1];
  serieExemplo2 = FAKE_SERIES[2];

  titulo = 'ASSISTIR A SEGUIR';

  get imagePath() {
    return 'posters/' + this.serieExemplo.imageUrl;
  }

  onFinalizado() {
    this.serieExemplo.episodiosRestantes--;
  }

}
