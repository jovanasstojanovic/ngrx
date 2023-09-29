import { Injectable, OnInit } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { GuessArtistService } from 'src/app/services/guess-artist-service/guess-artist.service';
import {
  loadGuessTheArtist,
  loadGuessTheArtistFailure,
  loadGuessTheArtistSuccess,
} from './guess-artist.actions';

@Injectable()
export class GuessArtistEffects implements OnInit {
  constructor(
    private actions$: Actions,
    private guessArtistService: GuessArtistService
  ) {}

  ngOnInit(): void {}

  loadGuessTheArtist$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadGuessTheArtist),
      switchMap(() =>
        this.guessArtistService.getGuessTheArtist().pipe(
          map((guesses: any) => loadGuessTheArtistSuccess({ guesses })),
          catchError((error) => of(loadGuessTheArtistFailure({ error })))
        )
      )
    )
  );
}
