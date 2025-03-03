import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

import { Serie } from '../serie.interface';
import { FAKE_SERIES } from '../../fake-data';
import { StatsComponent } from "../stats/stats.component";


@Component({
  selector: 'app-series-lista',
  imports: [MatExpansionModule, StatsComponent, CommonModule],
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

  getStreamingColor(streaming: string) {
    return {
      'btn-primary': streaming === 'Amazon',
      'btn-danger': streaming === 'Netflix',
      'btn-dark': streaming === 'HBO'
    };
  }

}
