import { Injectable, OnInit } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ArtistPhotoService } from 'src/app/services/artist-photo/artist-photo.service';
import {
  loadArtistPhoto,
  loadArtistPhotoFailure,
  loadArtistPhotoSuccess,
} from './artist-photo.actions';

@Injectable()
export class LyricsEffects implements OnInit {
  constructor(
    private actions$: Actions,
    private photoService: ArtistPhotoService
  ) {}

  ngOnInit(): void {}

  loadContinueLyrics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadArtistPhoto),
      switchMap(() =>
        this.photoService.getArtistPhoto().pipe(
          map((artist: any) => loadArtistPhotoSuccess({ artist })),
          catchError((error) => of(loadArtistPhotoFailure({ error })))
        )
      )
    )
  );
}
