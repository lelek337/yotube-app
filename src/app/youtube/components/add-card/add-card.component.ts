import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
// import { map } from 'rxjs';

import { selectCard } from 'src/app/state/selectors/youtube.selectors';
import { UserState } from 'src/app/state/state/state';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent implements OnInit {

  constructor(private store: Store) { }

  @Input() card!: UserState;

  item$ = this.store.select(selectCard);

  ngOnInit(): void {
  }

}
