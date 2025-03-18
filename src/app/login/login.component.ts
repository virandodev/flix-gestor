import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { DivFormComponent } from "../shared/components/div-form/div-form.component";
import { AuthService } from '../shared/services/auth.service';

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

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private authService: AuthService
  ) {
  }

  login() {
    this.authService.login(this.usuario, this.senha);
    this.dialogRef.close('Fechando Modal...');
  }

  onCadastrar() {
    this.isCadastrar = !this.isCadastrar;
  }

}
