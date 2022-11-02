import { createReducer, on } from '@ngrx/store';

import * as UserActions from 'src/app/state/actions/actions';
import { Item } from 'src/app/shared/models/search-item.model';

const initialState: Item[] = [];

export const responseReducer = createReducer(
  initialState,
  on(UserActions.fetchResponsSurccess, (state, { response }) => response),
  on(UserActions.DataFilter, (state, { response }) => {
    let index = 0;
    let indexStorage: string | null = sessionStorage.getItem('indexDate');
    if (indexStorage) {
      index = +indexStorage;
    }

    if (index === 0) {
      index++;
      response = response.slice().sort((a, b) => a.snippet.publishedAt.slice(0, 11) > b.snippet.publishedAt.slice(0, 11) ? 1 : -1);
    } else {
      index = 0;
      response = response.slice().sort((a, b) => a.snippet.publishedAt.slice(0, 11) < b.snippet.publishedAt.slice(0, 11) ? 1 : -1);
    }
    sessionStorage.setItem('indexDate', index.toString());

    return response;
  }),
  on(UserActions.ViewFilter, (state, { response }) => {
    let index = 0;
    let indexStorage: string | null = sessionStorage.getItem('indexView');
    if (indexStorage) {
      index = +indexStorage;
    }

    if (index === 0) {
      index++;
      response = response.slice().sort((a, b) => a.statistics.viewCount > b.statistics.viewCount ? 1 : -1);
    } else {
      index = 0;
      response = response.slice().sort((a, b) => a.statistics.viewCount < b.statistics.viewCount ? 1 : -1);
    }
    sessionStorage.setItem('indexView', index.toString());

    return response;
  }),

  on(UserActions.TextFilter, (state, { response, searchText }) => {
    if (searchText.length === 0) {
      return response;
    }
    return response
      ? response.filter(
        (video: Item) => video.snippet.title.toLocaleLowerCase().trim()
          .includes(searchText.toLocaleLowerCase().trim()),
      )
      : response;
  }),
);
