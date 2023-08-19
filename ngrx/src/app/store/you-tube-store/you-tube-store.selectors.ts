import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

export const selectVideoId = createSelector(
  (state: AppState) => state.videoId,
  (videoIdState) => videoIdState.videoId
);
