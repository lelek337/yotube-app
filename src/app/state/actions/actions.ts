import { createAction, props } from '@ngrx/store';

import { Item } from 'src/app/shared/models/search-item.model';
import { UserState } from 'src/app/state/state/state';

const actionSourse = '[userReducer]';
const secondActionSourse = '[resposeReducer]';

export const addCard = createAction(
  `${actionSourse} Add Card`,
  props<{ cardData: UserState }>(),
);

export const fetchRespons = createAction(
  `${secondActionSourse} Fetch Response `,
);

export const fetchResponsSurccess = createAction(
  `${secondActionSourse} Fetch Response Success`,
  props<{ response: Item[] }>(),
);

export const fetchResponsFailed = createAction(
  `${secondActionSourse} Fech Response Failed`,
);

export const DataFilter = createAction(
  `${secondActionSourse} Filter Data Response`,
  props<{ response: Item[] }>(),
);

export const ViewFilter = createAction(
  `${secondActionSourse} Filter View Response`,
  props<{ response: Item[] }>(),
);

export const TextFilter = createAction(
  `${secondActionSourse} Filter Text Response`,
  props<{ response: Item[], searchText: string }>(),
);
