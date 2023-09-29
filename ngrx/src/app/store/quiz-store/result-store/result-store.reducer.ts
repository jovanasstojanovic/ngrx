import { createReducer, on } from '@ngrx/store';
import { loadResultFailure, loadResultSuccess } from './result-store.actions';

export interface ResultState {
  playlist: any;
  loading: boolean;
  error: any;
}

export const initialState: ResultState = {
  playlist: {},
  loading: false,
  error: null,
};

export const resultReducer = createReducer(
  initialState,
  on(loadResultSuccess, (state, { playlist }) => ({
    ...state,
    playlist,
    loading: false,
    error: null,
  })),
  on(loadResultFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
