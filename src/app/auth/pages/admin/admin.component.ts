import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import * as UserAction from 'src/app/state/actions/actions';
import { UserState } from 'src/app/state/state/state';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  form: FormGroup;

  date = new Date;

  constructor(
    private router: Router,
    private store: Store,
  ) {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      discription: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
      linkVideo: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    const cardData: UserState = {
      title: this.form.value.title,
      discription: this.form.value.discription,
      linkImage: this.form.value.img,
      linkVideo: this.form.value.linkVideo,
      creationDate: this.date,
    };

    this.store.dispatch(UserAction.addCard({ cardData }));

    this.router.navigate(['/main']);
    // this.store.
  }

}
