import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { FAKE_SERIES } from '../../fake-data';
import { StatsComponent } from "../stats/stats.component";
import { Serie } from '../serie.interface';


@Component({
  selector: 'app-series-lista',
  imports: [MatExpansionModule, StatsComponent],
  templateUrl: './series-lista.component.html',
  styleUrl: './series-lista.component.css'
})
export class SeriesListaComponent {
  serieExemplo = FAKE_SERIES;
  ultimaSerieVista: Serie;

  titulo = 'ASSISTIR A SEGUIR';

  get imagePath() {
    return 'posters/';
  }

  onFinalizado(index) {
    this.ultimaSerieVista = this.serieExemplo[index];
    this.serieExemplo[index].episodiosRestantes--;
  }

  voltarSerieVista(ultimaSerie) {
    const index = this.serieExemplo.findIndex(serie => serie.id === ultimaSerie.id);
    if (index !== -1) {
      this.serieExemplo[index].episodiosRestantes++
      this.ultimaSerieVista = null;
    }
  }

}
