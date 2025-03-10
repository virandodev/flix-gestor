import { Component, inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  imports: [MatDialogModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  isLogado = false;

  ngOnInit() {
    this.verificarLogin();
  }

  onLogin() {
    if(this.isLogado) {
      localStorage.removeItem('credenciais');
      window.location.reload(); //COMANDO FEIO, REMOVER PROXIMAS AULAS!
    } else {
      this.dialog.open(LoginComponent);
    }
  }

  verificarLogin() {
    const infoLogin = localStorage.getItem('credenciais');
    if (infoLogin) {
      this.isLogado = true;
    }
    console.log('Está logado? ', this.isLogado);
  }
}
