import { createReducer, on } from '@ngrx/store';
import {
  loadArtistPhotoFailure,
  loadArtistPhotoSuccess,
} from './artist-photo.actions';

export interface PhotoState {
  artist: any[];
  loading: boolean;
  error: any;
}

export const initialState: PhotoState = {
  artist: [],
  loading: false,
  error: null,
};

export const lyricsReducer = createReducer(
  initialState,
  on(loadArtistPhotoSuccess, (state, { artist }) => ({
    ...state,
    artist,
    loading: false,
    error: null,
  })),
  on(loadArtistPhotoFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
