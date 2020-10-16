import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private auth: AngularFireAuth) {
  }
  
  ngOnInit(): void {
  }
  
login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  
}
