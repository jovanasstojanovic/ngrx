import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LyricsState } from './continue-lyrics.reducer';

const selectLyricsState = createFeatureSelector<LyricsState>('lyrics');

export const selectLyrics = createSelector(
  selectLyricsState,
  (state) => state.lyrics
);

export const selectLoading = createSelector(
  selectLyricsState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectLyricsState,
  (state) => state.error
);
