import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
    return new Promise(
      (resolve, reject) => firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            resolve(true);
          }
          else {
            this.router.navigate(['/auth', 'signin']);
            resolve(false);
          }
        }
      )
    )
  }
}
export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> => {
  const router = inject(Router)
  return new Promise(
    (resolve, reject) => firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          resolve(true);
        }
        else {
          router.navigate(['/auth', 'signin']);
          resolve(false);
        }
      }
    )
  )
}
