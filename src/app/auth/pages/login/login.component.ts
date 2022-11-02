import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RegistrationService } from 'src/app/auth/services/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;

  hide = true;

  constructor(private registration: RegistrationService) {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, this.checkForLength, this.checkForLetters, this.checkLettersNumbers, this.checkSpecialCharacter]),
    });
  }

  onSubmit() {
    this.registration.login(
      this.form.value.email,
      this.form.value.pass,
      this.form.value.login,
    );

  }

  checkForLength(control: FormControl) {
    if (control.value.length <= 8) {
      return {
        'lengthError': true,
      };
    }
    return null;
  }

  checkForLetters(control: FormControl) {
    const capitalLetters = control.value.split('').filter((m: string) => {
      return m === m.toUpperCase();
    });
    const smallLetters = control.value.split('').filter((m: string) => {
      return m === m.toLowerCase();
    });
    if (!(capitalLetters || smallLetters)) {
      return {
        'lettersError': true,
      };
    }
    return null;
  }

  checkLettersNumbers(control: FormControl) {
    const checkLetters = control.value.split('').filter((m: string) => {
      return +m === Number(m);
    });
    const checkNumbers = control.value.split('').filter((m: string) => {
      return m === String(m);
    });
    if (!(checkLetters || checkNumbers)) {
      return {
        'numberLetterError': true,
      };
    }
    return null;
  }

  checkSpecialCharacter(control: FormControl) {
    const specialCharacter = control.value.split('').filter((m: string) => {
      if (m === '!' || m === '@' || m === ']' || m == '#' || m === '?') {
        return m;
      }
      return null;
    });
    if (!specialCharacter) {
      return {
        'specialCharacterError': true,
      };
    }
    return null;
  }
}
