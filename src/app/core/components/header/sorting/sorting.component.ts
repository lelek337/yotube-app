import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as Actions from 'src/app/state/actions/actions';
import { selectItemsStore } from 'src/app/state/selectors/youtube.selectors';
import { Item } from 'src/app/shared/models/search-item.model';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent implements OnInit {
  constructor(
    private store: Store,
  ) { }

  items$ = this.store.select(selectItemsStore);

  dataResponse!: Item[];

  ngOnInit(): void {
    this.items$.subscribe(( res: Item[] ) => this.dataResponse = res);
  }

  dataClick() {
    const response = this.dataResponse;
    this.store.dispatch(Actions.DataFilter({ response }));
  }

  viewClick() {
    const response = this.dataResponse;
    this.store.dispatch(Actions.ViewFilter({ response }));
  }

  onTextInput(event: Event) {
    const response = this.dataResponse;
    const target = event.target as HTMLInputElement;
    const searchText = target.value;
    this.store.dispatch(Actions.TextFilter({ response, searchText }));
  }
}
