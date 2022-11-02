import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/auth/services/login.service';
import { AUTH_DATA } from 'src/app/auth/services/registration.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  visibleButton!: boolean;

  yourLogin!: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }



  ngAfterContentChecked() {
    const userData = JSON.parse(localStorage.getItem(AUTH_DATA)!);
    this.yourLogin = userData.login;

    const pahtName: string | null = window.location.pathname;
    const pahtNameBoolean = pahtName === '/login' ? this.visibleButton = true : this.visibleButton = false;

    this.loginService.visibleButton(pahtNameBoolean);
    this.loginService.inOutput$.subscribe(arg => this.visibleButton = arg);
  }

  onClick() {
    if (this.visibleButton)  {
      this.router.navigate(['main']);
    } else this.router.navigate(['login']);
    console.log(this.visibleButton);
  }
}
