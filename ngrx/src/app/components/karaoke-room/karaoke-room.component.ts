import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as SearchActions from './you-tube-service/you-tube-store/you-tube-store.actions';
import { AppState } from 'src/app/app.state';
import { selectVideoId } from './you-tube-service/you-tube-store/you-tube-store.selectors';
import { YouTubeService } from './you-tube-service/you-tube.service';
import { addVideoName } from './video-names-store/video-names.actions';
import { selectVideoNames } from './video-names-store/video-names.selector';

@Component({
  selector: 'app-karaoke-room',
  templateUrl: './karaoke-room.component.html',
  styleUrls: ['./karaoke-room.component.css']
})
export class KaraokeRoomComponent implements OnInit{

  dotsArray = new Array(15);
  // selectedVideos: string[] = [];
  // uniqueVideoNames: Set<string> = new Set();

  constructor(private store: Store<AppState>,private youTubeService: YouTubeService) {}

  searchQuery: string = '';
  localSearchQuery:string='';
  videoId: string = '';
  loading: boolean = false;
  error: boolean = false;

  performSearch() {
    if (this.searchQuery.trim() !== '') {
      this.localSearchQuery=this.searchQuery+" karaoke";
      this.store.dispatch(SearchActions.searchAction({ query: this.localSearchQuery }));
      this.store.select(state => state.videoId).subscribe(searchState => {
        this.videoId = searchState.videoId;
        this.loading = searchState.loading;
        this.error = searchState.error;
      });
    }
  }


  ngOnInit() {
     this.store.select(selectVideoId).subscribe(videoId => {
      this.videoId = videoId;
    });
    this.store.select(state => state.videoId.loading).subscribe(loading => {
      this.loading = loading;
    });
    // this.store.pipe(select(selectVideoNames)).subscribe(videoNames => {
    //   this.uniqueVideoNames = new Set(videoNames);
    //   this.selectedVideos = Array.from(this.uniqueVideoNames).slice(-10); // Prikazujemo poslednjih 10 jedinstvenih imena
    // });
  }


  handleVideoNameSelected(videoName: string) {
  this.youTubeService.getVideoNameByName(videoName)
    .then(videoTitle => {
      if (videoTitle) {
        this.store.dispatch(addVideoName({ videoName: videoTitle }));
        // Ovde možete dodati logiku za čuvanje naziva u bazi
      } else {
        console.log('Video sa tim nazivom nije pronađen.');
      }
    })
    .catch(error => {
      console.error('Greška prilikom dohvatanja naziva videa:', error);
    });
}






}
