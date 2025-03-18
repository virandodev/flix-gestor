import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogado = signal(false);

  constructor() { }

  login(usuario: string, senha: string) {
    let credenciais = {
      usuario: usuario,
      senha: senha
    }
    localStorage.setItem('credenciais', JSON.stringify(credenciais));
    this.isLogado.set(true);
  }

  logout() {
    localStorage.removeItem('credenciais');
    this.isLogado.set(false);
  }

  verificaLogin() {
    const infoLogin = localStorage.getItem('credenciais');
    if (infoLogin) {
      this.isLogado.set(true);
    }
  }
}
