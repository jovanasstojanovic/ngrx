import { createReducer, on } from '@ngrx/store';
import * as SearchActions from './you-tube-store.actions';

export interface YouTubeState {
  videoId: string;
  loading:boolean;
  error: boolean;
}

export const initialState: YouTubeState = {
  videoId: '',
  loading:false,
  error: false,
};

export const youTubeStoreReducer = createReducer(
  initialState,
  on(SearchActions.searchAction, (state,{query}) => ({
     ...state, 
     query:query,
     loading: true, 
     error: false 
    })),
  on(SearchActions.searchSuccessAction, (state, { videoId }) => ({
    ...state,
    videoId: videoId,
    loading: false,
    error:false
  })),
  on(SearchActions.searchLoadingAction, state => ({
    ...state,
    loading: true,
    error:false
  })),
  on(SearchActions.searchErrorAction, (state) => ({ 
    ...state, 
    loading: false, 
    error: true 
  }))
);

