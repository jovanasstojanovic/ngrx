import { createReducer, on } from '@ngrx/store';
import { addVideoName, addVideoNameSuccess } from './video-names.actions';

export const MAX_VIDEO_NAMES = 10;

export interface VideoNamesState {
  videoNames: Set<string>;
}

export const initialState: VideoNamesState = {
  videoNames: new Set<string>(),
};

export const videoNamesReducer = createReducer(
  initialState,
  on(addVideoName, (state, { videoName }) => ({
    ...state,
    videoNames: new Set([...state.videoNames, videoName]),
  })),
  on(addVideoNameSuccess, (state, { videoName }) => ({
    ...state,
    videoNames: new Set([...state.videoNames, videoName]),
  }))
);
