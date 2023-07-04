import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDYA1tRfY4C7Ap-i0OjBB9MMMJmJyFp27g",
      authDomain: "mylibrary-abcef.firebaseapp.com",
      projectId: "mylibrary-abcef",
      storageBucket: "mylibrary-abcef.appspot.com",
      messagingSenderId: "207430464868",
      appId: "1:207430464868:web:c08eee6a68cff69a85b671",
      measurementId: "G-YS25KBQBX8"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
