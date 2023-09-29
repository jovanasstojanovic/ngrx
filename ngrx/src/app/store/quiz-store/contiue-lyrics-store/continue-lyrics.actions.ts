import { createAction, props } from '@ngrx/store';

export const loadContinueLyrics = createAction('[Continue Lyrics] Load Lyrics');
export const loadContinueLyricsSuccess = createAction(
  '[Continue Lyrics] Load Lyrics Success',
  props<{ lyrics: any[] }>()
);
export const loadContinueLyricsFailure = createAction(
  '[Continue Lyrics] Load Lyrics Failure',
  props<{ error: any }>()
);
