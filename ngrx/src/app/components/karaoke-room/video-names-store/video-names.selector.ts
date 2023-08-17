import { createSelector, createFeatureSelector } from '@ngrx/store';
import { VideoNamesState } from './video-name.reducer';

export const selectVideoNamesState = createFeatureSelector<VideoNamesState>('videoNames');

export const selectVideoNames = createSelector(
  selectVideoNamesState,
  (state: VideoNamesState) => state.videoNames
);
