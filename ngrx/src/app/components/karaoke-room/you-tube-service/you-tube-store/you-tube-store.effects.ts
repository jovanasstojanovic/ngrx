// search.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as SearchActions from './you-tube-store.actions';
import { YouTubeService } from '../you-tube.service';

@Injectable()
export class YouTubeStoreEffects {
  constructor(
    private actions$: Actions,
    private youtubeService: YouTubeService
  ) {}

  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.searchAction),
      switchMap(action =>
        this.youtubeService.searchVideos(action.query).pipe(
          map(response => {
            const videoId = response.items[0].id.videoId;
            return SearchActions.searchSuccessAction({ videoId });
          }),
          catchError(() => of({ type: 'Search Error' }))
        )
      )
    )
  );
}
