import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
import { addVideoName, addVideoNameSuccess } from './video-names.actions';

@Injectable()
export class VideoNamesEffects {
  private jsonServerUrl = 'http://localhost:3000/videos';

  constructor(private actions$: Actions, private http: HttpClient) {}

  addVideoName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addVideoName),
      switchMap((action) =>
        this.http.post(this.jsonServerUrl, { name: action.videoName }).pipe(
          map((response: any) => {
            console.log('ovde sam');
            return addVideoNameSuccess({ videoName: action.videoName });
          })
        )
      )
    )
  );
}
