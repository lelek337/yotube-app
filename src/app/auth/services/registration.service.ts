import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth/guards/auth.guard';

export const AUTH_DATA = 'user-data';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private router: Router, private authGuard: AuthGuard) { }

  login(email: string, password: string, login: string) {
    localStorage.setItem(AUTH_DATA, JSON.stringify({ email: email, password: password, login: login }));
    this.router.navigate(['main']);
  }

  getAuthenticated() {
    return !!localStorage.getItem(AUTH_DATA);
  }

  // onRegistration(login:string, pass:string) {
  //   localStorage.setItem('login', login);
  //   localStorage.setItem('pass', pass);
  // }
}
