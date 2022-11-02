import { Item } from 'src/app/shared/models/search-item.model';

export interface AppState {
  userState: UserState[],
  itemsState: Item[],
}

export interface UserState {
  title: string,
  discription: string,
  linkImage: string,
  linkVideo: string,
  creationDate: Date,
  id?: number,
}
