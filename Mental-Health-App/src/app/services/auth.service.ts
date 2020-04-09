import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";
import * as firebase from "firebase";
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;
  userData: any;
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private firebaseAuth: AngularFireAuth, public router: Router) {
    this.user = firebaseAuth.authState;
    this.firebaseAuth.authState.subscribe(user => {

      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));

      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Access granted.');
        this.router.navigate(['menu']);
        this.loggedIn.next(true);
      })
      .catch(err => {
        console.log('Invalid email or password', err.message);
        alert('Invalid email or password.');
        this.router.navigate(['login']);
      });
  }

  logout() {
    this.firebaseAuth
      .signOut();
    this.loggedIn.next(false);
  }

  getLoggedInUser(): any {
    return this.firebaseAuth.authState;
  }
}
