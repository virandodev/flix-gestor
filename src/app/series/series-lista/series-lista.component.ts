import { Component } from '@angular/core';

import { Serie } from '../../serie.interface';
import { FAKE_SERIES } from '../../../fake-data';


@Component({
  selector: 'app-series-lista',
  standalone: false,
  templateUrl: './series-lista.component.html',
  styleUrl: './series-lista.component.css'
})
export class SeriesListaComponent {
  serieExemplo = FAKE_SERIES;
  ultimaSerieVista: Serie;

  titulo1 = 'ASSISTIR A SEGUIR';
  titulo2 = 'FINALIZADOS';

  get imagePath() {
    return 'posters/';
  }

  onFinalizado(index) {
    this.ultimaSerieVista = this.serieExemplo[index];
    this.serieExemplo[index].episodioAtual++;
  }

  voltarSerieVista(ultimaSerie) {
    const index = this.serieExemplo.findIndex(serie => serie.id === ultimaSerie.id);
    if (index !== -1) {
      this.serieExemplo[index].episodioAtual--
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

  getEpisodiosRestantes(serie: Serie): number {
    const qtdTotalSerie = serie.episodios.length;
    const episodioAtual = serie.episodioAtual;

    const qtdRestante = qtdTotalSerie - (episodioAtual - 1);

    return qtdRestante;
  }

  serieFinalizada(serie: Serie): boolean {
    return serie.episodioAtual <= serie.episodios.length;
  }

}
