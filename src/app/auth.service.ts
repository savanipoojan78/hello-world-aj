import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { FirebaseApp } from '@angular/fire';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private userService:UserService,private afAuth:AngularFireAuth,private route :ActivatedRoute,private router:Router) { 
    this.user$=afAuth.authState;
  }
  logout(){
    this.afAuth.signOut();
  }
  async login(){
    let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl') || '/'
    localStorage.setItem('returnUrl',returnUrl)
    const res=await this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
    if(res.user){
      this.userService.save(res.user);
      let returnUrl=localStorage.getItem('returnUrl');
      this.router.navigateByUrl(returnUrl)
    }
  }
}
