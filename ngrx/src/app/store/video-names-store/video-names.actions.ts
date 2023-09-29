import { createAction, props } from '@ngrx/store';

export const addVideoName = createAction(
  '[Video Names] Add Video Name',
  props<{ videoName: string }>()
);

export const addVideoNameSuccess = createAction(
  '[Video Names] Successfull Adding Video Name',
  props<{ videoName: string }>()
);
