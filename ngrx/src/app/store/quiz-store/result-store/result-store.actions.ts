import { createAction, props } from '@ngrx/store';

export const loadResult = createAction(
  '[Result] Load',
  props<{ index: number }>()
);

export const loadResultSuccess = createAction(
  '[Result] Load Success',
  props<{ playlist: any }>()
);

export const loadResultFailure = createAction(
  '[Result] Load Failure',
  props<{ error: any }>()
);
