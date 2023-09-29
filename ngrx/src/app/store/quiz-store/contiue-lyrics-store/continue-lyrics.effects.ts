import { Injectable, OnInit } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ContinueLyricsService } from 'src/app/services/continue-lyrics-service/continue-lyrics.service';
import {
  loadContinueLyrics,
  loadContinueLyricsFailure,
  loadContinueLyricsSuccess,
} from './continue-lyrics.actions';

@Injectable()
export class LyricsEffects implements OnInit {
  constructor(
    private actions$: Actions,
    private lyricsService: ContinueLyricsService
  ) {}

  ngOnInit(): void {}

  loadContinueLyrics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadContinueLyrics),
      switchMap(() =>
        this.lyricsService.getContinueLyrics().pipe(
          map((lyrics: any) => loadContinueLyricsSuccess({ lyrics })),
          catchError((error) => of(loadContinueLyricsFailure({ error })))
        )
      )
    )
  );
}
