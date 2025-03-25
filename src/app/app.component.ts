import { Component } from '@angular/core';

import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent {
  title = 'flix-gestor';

  constructor(authService: AuthService) {
    authService.verificaLogin();
  }
}
