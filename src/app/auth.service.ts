import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map, of, switchMap } from 'rxjs';
import { User } from './user.model';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwtHelper = new JwtHelperService();
  private userSubject = new BehaviorSubject<firebase.User | null>(null);
  public user$: Observable<any> = this.userSubject.asObservable();

  constructor(private afAuth: AngularFireAuth, private router: Router) {

    this.afAuth.authState.pipe(
      switchMap(_user => {
        if(_user) {
          return _user.getIdToken().then(token => {
            localStorage.setItem("token", token);
            this.userSubject.next(_user);
            return _user;
          })
        }else{
          localStorage.removeItem('token');
          this.userSubject.next(null);
          return of(null);;
        }
      })
    ).subscribe();


  }
  

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!(token && !this.jwtHelper.isTokenExpired(token));
  }


  /**
   * Login via github 
   * 
   * */
  async loginWithGitHub() {
    try {
      const userCredential = await this.afAuth.signInWithPopup(new firebase.auth.GithubAuthProvider());
      const user = userCredential.user;
      if (user) {
        const token = await user.getIdToken();
        localStorage.setItem('token', token);
        this.userSubject.next(user);
        this.router.navigate(['/home']);
      }
    }
    catch (error) {
      console.log('Error during login with GitHub:', error);
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      localStorage.removeItem('token');
      this.userSubject.next(null);
      this.router.navigate(['/home']);
    } catch (error) {
      console.log('Error during logout:', error);
    }
  }

  getUser(): Observable<User | null> {
    return this.afAuth.authState as Observable<User | null>;
  }
}
