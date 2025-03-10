import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DivFormComponent } from "../shared/div-form/div-form.component";

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

  login() {
    let credenciais = {
      usuario: this.usuario,
      senha: this.senha
    }
    localStorage.setItem('credenciais', JSON.stringify(credenciais));
  }

  onCadastrar() {
    this.isCadastrar = !this.isCadastrar;
  }

}
