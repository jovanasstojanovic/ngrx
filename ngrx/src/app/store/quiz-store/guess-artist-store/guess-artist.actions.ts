import { createAction, props } from '@ngrx/store';

export const loadGuessTheArtist = createAction('[Guess The Artist] Load');
export const loadGuessTheArtistSuccess = createAction(
  '[Guess The Artist] Load Success',
  props<{ guesses: any[] }>()
);
export const loadGuessTheArtistFailure = createAction(
  '[Guess The Artist] Load Failure',
  props<{ error: any }>()
);
