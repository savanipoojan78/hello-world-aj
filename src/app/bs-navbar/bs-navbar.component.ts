import { Component } from '@angular/core';
import { auth } from 'firebase/app';
import * as firebase from 'firebase'
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent{
  user$: Observable<firebase.User>;
  
  constructor(private auth: AngularFireAuth) {  
    this.user$=auth.authState;
  }

  logout() {
    this.auth.signOut();
  }

}
