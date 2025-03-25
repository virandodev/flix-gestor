import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component';
import { SeriesModule } from './series/series.module';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SeriesModule,
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
