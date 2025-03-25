import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

import { StatsComponent } from './stats/stats.component';
import { SeriesListaComponent } from './series-lista/series-lista.component';



@NgModule({
  declarations: [
    SeriesListaComponent,
    StatsComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports: [
    SeriesListaComponent
  ]
})
export class SeriesModule { }
