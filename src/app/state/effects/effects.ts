import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, of } from 'rxjs';

import YoutubeService from 'src/app/youtube/services/youtube.service';
import * as AppActions from 'src/app/state/actions/actions';
import { Item } from 'src/app/shared/models/search-item.model';

@Injectable()
export class AppEffects {

  loadItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.fetchRespons),
      switchMap(() =>
        this.youtubeServise.videos$.pipe(
          map((response: Item[]) =>  AppActions.fetchResponsSurccess({ response })),
          catchError(() => of(AppActions.fetchResponsFailed())),
        )),
    );
  },
  );

  constructor(
    private actions$: Actions,
    private youtubeServise: YoutubeService,
  ) {}
}
