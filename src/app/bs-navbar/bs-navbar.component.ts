import { Component } from '@angular/core';
import { auth } from 'firebase/app';
import * as firebase from 'firebase'
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent{
  user: firebase.User;
  
  constructor(private auth: AngularFireAuth) {
    auth.authState.subscribe(user=>this.user=user);
  }

  logout() {
    this.auth.signOut();
  }

}
