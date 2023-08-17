// video-names.effects.tsimport { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { addVideoName, updateVideoNames } from './video-names.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class VideoNamesEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  updateVideoNames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addVideoName),
      switchMap(action => {
        const url = 'http://localhost:4200/karaoke-room'; 

        return this.http.post<string[]>(url, action.videoName).pipe(
          map(videoNames => {
            return updateVideoNames({ videoNames });
          })
        );
      })
    )
  );
}
