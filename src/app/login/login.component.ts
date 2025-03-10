import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DivFormComponent } from "../shared/div-form/div-form.component";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, DivFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario = '';
  senha = '';
  nome = '';
  nascimento = '';
  isCadastrar = false;

  constructor(public dialogRef: MatDialogRef<LoginComponent>) {
  }

  login() {
    let credenciais = {
      usuario: this.usuario,
      senha: this.senha
    }
    localStorage.setItem('credenciais', JSON.stringify(credenciais));
    this.dialogRef.close('Fechando Modal...');
    window.location.reload(); //COMANDO FEIO, REMOVER PROXIMAS AULAS!
  }

  onCadastrar() {
    this.isCadastrar = !this.isCadastrar;
  }

}
