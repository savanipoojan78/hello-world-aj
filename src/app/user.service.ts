import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore:AngularFirestore) { }
  save(user: firebase.User){
    this.firestore.collection("user").doc(user.uid).set({
      name:user.displayName,
        email:user.email
    })

    // this.db.object('/users/'+user.uid).update({
    //   name:user.displayName,
    //   email:user.email
    // })
  }
}
