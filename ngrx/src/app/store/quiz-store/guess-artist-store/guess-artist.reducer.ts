import { createReducer, on } from '@ngrx/store';
import {
  loadGuessTheArtistFailure,
  loadGuessTheArtistSuccess,
} from './guess-artist.actions';

export interface GuessArtistState {
  guesses: any[];
  loading: boolean;
  error: any;
}

export const initialState: GuessArtistState = {
  guesses: [],
  loading: false,
  error: null,
};

export const lyricsReducer = createReducer(
  initialState,
  on(loadGuessTheArtistSuccess, (state, { guesses }) => ({
    ...state,
    guesses,
    loading: false,
    error: null,
  })),
  on(loadGuessTheArtistFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
