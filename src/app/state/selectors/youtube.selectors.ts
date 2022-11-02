import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Item } from 'src/app/shared/models/search-item.model';
import { UserState } from 'src/app/state/state/state';



export const selectCardStore = createFeatureSelector<UserState[]>('userState');
export const selectItemsStore = createFeatureSelector<Item[]>('itemsState');

export const selectCard = createSelector(
  selectCardStore,
  (userState: UserState[]) =>  {
    return userState.filter(( res: UserState ) => res !== undefined);
  },
);




