import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  async loginWithGitHub() {
    try {
      await this.afAuth.signInWithPopup(new firebase.auth.GithubAuthProvider());
      this.router.navigate(['/']);
    } catch (error) {
      console.log('Error during login with GitHub:', error);
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      this.router.navigate(['/']);
    } catch (error) {
      console.log('Error during logout:', error);
    }
  }

  getUser() {
    return this.afAuth.authState;
  }
}
