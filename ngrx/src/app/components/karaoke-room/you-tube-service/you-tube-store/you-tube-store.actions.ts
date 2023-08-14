import { createAction, props } from '@ngrx/store';

export const searchAction = createAction(
  '[Search] Search Action',
  props<{ query: string }>()
);

export const searchSuccessAction = createAction(
  '[Search] Search Success Action',
  props<{ videoId: string }>()
);