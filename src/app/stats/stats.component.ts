import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Serie } from '../serie.interface';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  @Input({required: true}) ultimaSerie: Serie;
  @Output() desfazerCall = new EventEmitter<Serie>();

  onDesfazer() {
    this.desfazerCall.emit(this.ultimaSerie);
    this.ultimaSerie = null;
  }
}
