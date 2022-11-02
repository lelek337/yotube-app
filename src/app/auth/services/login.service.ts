import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private inputOutputSubject = new BehaviorSubject<boolean>(false);

  inOutput$: Observable<boolean> = this.inputOutputSubject.asObservable();

  constructor() { }

  visibleButton(order: boolean) {
    this.inputOutputSubject.next(order);
  }
}
