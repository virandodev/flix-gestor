import { Component, inject } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  imports: [MatDialogModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  readonly dialog = inject(MatDialog);

  onLogin() {
    this.dialog.open(LoginComponent);
  }
}
