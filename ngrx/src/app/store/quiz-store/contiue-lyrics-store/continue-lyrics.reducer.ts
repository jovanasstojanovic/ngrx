import { createReducer, on } from '@ngrx/store';
import {
  loadContinueLyricsSuccess,
  loadContinueLyricsFailure,
} from './continue-lyrics.actions';

export interface LyricsState {
  lyrics: any[];
  loading: boolean;
  error: any;
}

export const initialState: LyricsState = {
  lyrics: [],
  loading: false,
  error: null,
};

export const lyricsReducer = createReducer(
  initialState,
  on(loadContinueLyricsSuccess, (state, { lyrics }) => ({
    ...state,
    lyrics,
    loading: false,
    error: null,
  })),
  on(loadContinueLyricsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
