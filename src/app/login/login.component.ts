import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario = '';
  senha = '';
  nome = '';
  nascimento = '';
  isCadastrar = false;

  test() {
    console.log('Meu usuario:', this.usuario, ' possui a senha: ', this.senha);
  }

  onCadastrar() {
    this.isCadastrar = !this.isCadastrar;
  }

}
