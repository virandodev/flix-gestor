import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { FAKE_SERIES } from '../../fake-data';
import { StatsComponent } from "../stats/stats.component";


@Component({
  selector: 'app-series-lista',
  imports: [MatExpansionModule, StatsComponent],
  templateUrl: './series-lista.component.html',
  styleUrl: './series-lista.component.css'
})
export class SeriesListaComponent {
  serieExemplo = FAKE_SERIES;

  titulo = 'ASSISTIR A SEGUIR';

  get imagePath() {
    return 'posters/';
  }

  onFinalizado(index) {
    this.serieExemplo[index].episodiosRestantes--;
  }

}
