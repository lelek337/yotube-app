import { createReducer, on } from '@ngrx/store';

import { UserState } from 'src/app/state/state/state';
import * as CardActions from 'src/app/state/actions/actions';

export const initialState: UserState[] = [];

export const cardReducer = createReducer(
  initialState,
  on(CardActions.addCard, (state, { cardData }) => ([
    ...state,
    cardData,
  ])),
);
