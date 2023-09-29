import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GuessArtistState } from './guess-artist.reducer';

const guessArtistState = createFeatureSelector<GuessArtistState>('guess');

export const guessArtist = createSelector(
  guessArtistState,
  (state) => state.guesses
);

export const guessArtistLoading = createSelector(
  guessArtistState,
  (state) => state.loading
);

export const guessArtistError = createSelector(
  guessArtistState,
  (state) => state.error
);
