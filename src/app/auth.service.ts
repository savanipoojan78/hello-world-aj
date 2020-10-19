import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { FirebaseApp } from '@angular/fire';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private afAuth:AngularFireAuth,private route :ActivatedRoute,private router:Router) { 
    this.user$=afAuth.authState;
  }
  logout(){
    this.afAuth.signOut();
  }
  async login(){
    console.log('returnURL',this.route.snapshot.queryParamMap)
    let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl') || '/'
    localStorage.setItem('returnUrl',returnUrl)
    const user=await this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
    if(user){
      let returnUrl=localStorage.getItem('returnUrl');
      this.router.navigateByUrl(returnUrl)
    }
  }
}
