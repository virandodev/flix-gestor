import { Component } from '@angular/core';

import { HeaderComponent } from "./header/header.component";
import { SeriesListaComponent } from './series-lista/series-lista.component';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SeriesListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flix-gestor';

  constructor(authService: AuthService) {
    authService.verificaLogin();
  }
}
