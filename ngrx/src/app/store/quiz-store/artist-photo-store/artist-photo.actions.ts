import { createAction, props } from '@ngrx/store';

export const loadArtistPhoto = createAction('[Artist Photo] Load Photo');
export const loadArtistPhotoSuccess = createAction(
  '[Artist Photo] Load Photo Success',
  props<{ artist: any[] }>()
);
export const loadArtistPhotoFailure = createAction(
  '[Artist Photo] Load Photo Failure',
  props<{ error: any }>()
);
