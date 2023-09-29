import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ResultState } from './result-store.reducer';

const resultState = createFeatureSelector<ResultState>('playlist');

export const guessArtist = createSelector(
  resultState,
  (state) => state.playlist
);

export const guessArtistLoading = createSelector(
  resultState,
  (state) => state.loading
);

export const guessArtistError = createSelector(
  resultState,
  (state) => state.error
);
