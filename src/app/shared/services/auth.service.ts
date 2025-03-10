import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(usuario: string, senha: string) {
    let credenciais = {
      usuario: usuario,
      senha: senha
    }
    localStorage.setItem('credenciais', JSON.stringify(credenciais));
  }

  logout() {
    localStorage.removeItem('credenciais');
  }

  verificaLogin() {
    const infoLogin = localStorage.getItem('credenciais');
    return infoLogin ? true : false
  }
}
