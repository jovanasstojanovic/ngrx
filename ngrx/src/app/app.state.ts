import { VideoNamesState } from "./components/karaoke-room/video-names-store/video-name.reducer";
import { YouTubeState } from "./components/karaoke-room/you-tube-service/you-tube-store/you-tube-store.reducer";

export interface AppState {
  videoId: YouTubeState;
  videoNames:VideoNamesState;
}