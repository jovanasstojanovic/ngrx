import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PhotoState } from './artist-photo.reducer';

const selectPhotoState = createFeatureSelector<PhotoState>('artist');

export const selectPhoto = createSelector(
  selectPhotoState,
  (state) => state.artist
);

export const selectLoading = createSelector(
  selectPhotoState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectPhotoState,
  (state) => state.error
);
