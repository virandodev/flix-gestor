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
export class HeaderComponent {

  constructor(
    public authService: AuthService,
    readonly dialog: MatDialog
  ) {}

  onLogin() {
    if(this.authService.isLogado()) {
      this.authService.logout();
    } else {
      this.dialog.open(LoginComponent);
    }
  }
}
