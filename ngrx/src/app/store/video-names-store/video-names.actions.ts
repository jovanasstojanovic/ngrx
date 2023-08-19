import { createAction, props } from '@ngrx/store';

export const addVideoName = createAction(
  '[Video Names] Add Video Name',
  props<{ videoName: string }>()
);