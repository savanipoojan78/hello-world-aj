import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { FirebaseApp } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private afAuth:AngularFireAuth) { 
    this.user$=afAuth.authState;
  }
  logout(){
    this.afAuth.signOut();
  }
  login(){
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }
}
