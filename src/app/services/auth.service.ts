import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          (data) => {
            resolve(data);
          },
          (error) => {
            reject(error)
          }
        )
      }
    )
  }
  signInUser(email: string, password: string) {
    console.log('signIn user', email + password);
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          (data) => {
            resolve(data);
          },
          (error) => {
            reject(error)
          }
        )
      }
    )
  }

  signOutUser() {
    firebase.auth().signOut();
  }
}
