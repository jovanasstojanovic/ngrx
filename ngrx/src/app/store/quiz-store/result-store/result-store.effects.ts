import { Injectable, OnInit } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadResult,
  loadResultFailure,
  loadResultSuccess,
} from './result-store.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ResultService } from 'src/app/services/result-service/result.service';

@Injectable()
export class ResultEffects implements OnInit {
  constructor(
    private actions$: Actions,
    private resultService: ResultService
  ) {}

  ngOnInit(): void {}

  loadResult$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadResult),
      switchMap((action) =>
        this.resultService.getResult(action.index).pipe(
          map((playlist: any) => loadResultSuccess({ playlist })),
          catchError((error) => of(loadResultFailure({ error })))
        )
      )
    )
  );
}
