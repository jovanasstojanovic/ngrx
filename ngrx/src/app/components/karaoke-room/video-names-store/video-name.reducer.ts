// video-names.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { addVideoName/*, resetVideoNames*/ } from './video-names.actions';

export const MAX_VIDEO_NAMES = 10; // Definišemo maksimalan broj imena

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
  // on(resetVideoNames, (state) => ({
  //   ...state,
  //   videoNames: new Set<string>(),
  // })),
  // on(updateVideoNames, (state, { videoNames }) => ({
  //   ...state,
  //   videoNames: videoNames,
  // }))
);
