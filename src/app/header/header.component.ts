import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

import { LoginComponent } from '../login/login.component';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [MatDialogModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isLogado = false;

  constructor(
    private authService: AuthService,
    readonly dialog: MatDialog
  ) {}

  ngOnInit() {
    this.verificarLogin();
  }

  onLogin() {
    if(this.isLogado) {
      this.authService.logout();
      window.location.reload(); //COMANDO FEIO, REMOVER PROXIMAS AULAS!
    } else {
      this.dialog.open(LoginComponent);
    }
  }

  verificarLogin() {
    const infoLogin = this.authService.verificaLogin();
    if (infoLogin) {
      this.isLogado = true;
    }
    console.log('Está logado? ', this.isLogado);
  }
}
