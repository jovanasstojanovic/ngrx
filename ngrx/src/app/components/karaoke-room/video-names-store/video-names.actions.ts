// video-names.actions.ts
import { createAction, props } from '@ngrx/store';

export const addVideoName = createAction(
  '[Video Names] Add Video Name',
  props<{ videoName: string }>()
);

// export const updateVideoNames = createAction(
//   '[Video Names] Update Video Names',
//   props<{ videoNames: string[] }>()
// );

// export const resetVideoNames = createAction('[Video Names] Reset Video Names');
