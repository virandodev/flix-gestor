import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  @Input({required: true}) ultimaSerie;
  @Output() desfazerCall = new EventEmitter();

  onDesfazer() {
    this.desfazerCall.emit(this.ultimaSerie);
    this.ultimaSerie = '';
  }
}
