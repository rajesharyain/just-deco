import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  template: `<button (click)="login()">Login with GitHub</button>`
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

  login() {
    this.authService.loginWithGitHub();
  }
}
