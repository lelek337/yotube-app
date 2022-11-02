import { Component, OnInit } from '@angular/core';
import {  Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { Item } from 'src/app/shared/models/search-item.model';
import YoutubeService from 'src/app/youtube/services/youtube.service';
import { selectItemsStore, selectCard } from 'src/app/state/selectors/youtube.selectors';
import * as UserAction from 'src/app/state/actions/actions';
import { UserState } from 'src/app/state/state/state';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {

  searchText = '';

  constructor(
    public youtubeService: YoutubeService,
    private store: Store,
    private router: Router,
  ) {
  }

  fetchedVideos!: Item[];

  cards!: UserState[];

  items$ = this.store.select(selectItemsStore);

  cards$ = this.store.select(selectCard);

  ngOnInit(): void {
    this.youtubeService.videos$.subscribe((response: Item[]) => this.store.dispatch(UserAction.fetchResponsSurccess({ response })));

    this.items$.subscribe(res => this.fetchedVideos = res);
    this.cards$.subscribe(userCards => this.cards = userCards);
  }

  onClick() {
    this.router.navigate(['/login/admin']);
  }
}
