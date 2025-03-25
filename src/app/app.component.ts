import { Component } from '@angular/core';

import { AuthService } from './shared/services/auth.service';
import { SeriesModule } from './series/series.module';

@Component({
  selector: 'app-root',
  imports: [SeriesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flix-gestor';

  constructor(authService: AuthService) {
    authService.verificaLogin();
  }
}
