import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";
import * as firebase from "firebase";
import {BehaviorSubject, Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";

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

  constructor(private firebaseAuth: AngularFireAuth, public router: Router, public afs: AngularFirestore,) {
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
        //this.refreshPage();
      })
      .catch(err => {
        console.log('Invalid email or password', err.message);
        alert('Sähköposti tai salasana on virheellinen.');
        this.router.navigate(['login']);
      });
  }

  logout() {
    this.firebaseAuth
      .signOut();
    this.loggedIn.next(false);
    //this.refreshPage();
  }

  getLoggedInUser(): any {
    return this.firebaseAuth.authState;
  }

  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: { uid: any; email: any } = {
      uid: user.uid,
      email: user.email,
    };
    return userRef.set(userData, {
      merge: true
    })
  }

  SignUp(email, password) {
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['menu']);
        this.loggedIn.next(true);
        this.SetUserData(result.user);
      }).catch((error) => {
        alert('Sähköposti on jo käytössä toisella tilillä.');
        console.log('The account is already in use.', error.message);
      })
  }

  showEmail() {
    if (this.userEmail == null) {
      return false;
    } else {
      return this.userEmail;
    }
  }

  /*
  refreshPage(){
    window.location.reload()
  }

   */
}
