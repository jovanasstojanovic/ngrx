import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as SearchActions from '../../../store/you-tube-store/you-tube-store.actions';
import { AppState } from 'src/app/app.state';
import { selectVideoId } from '../../../store/you-tube-store/you-tube-store.selectors';
import { YouTubeService } from '../../../services/you-tube-service/you-tube.service';
import { addVideoName } from '../../../store/video-names-store/video-names.actions';
import { Router } from '@angular/router';
import { VideoNamesService } from 'src/app/services/video-names-service/video-names.service';

@Component({
  selector: 'app-karaoke-room',
  templateUrl: './karaoke-room.component.html',
  styleUrls: ['./karaoke-room.component.css'],
})
export class KaraokeRoomComponent implements OnInit {
  dotsArray = new Array(15);
  searchQuery: string = '';
  localSearchQuery: string = '';
  videoId: string = '';
  loading: boolean = false;
  error: boolean = false;
  isOpen = false;
  videoNames: string[] = [];

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private youTubeService: YouTubeService,
    private videoService: VideoNamesService
  ) {}

  performSearch() {
    if (this.searchQuery.trim() !== '') {
      this.localSearchQuery = this.searchQuery + ' karaoke';
      this.store.dispatch(
        SearchActions.searchAction({ query: this.localSearchQuery })
      );
      this.store
        .select((state) => state.videoId)
        .subscribe((searchState) => {
          this.videoId = searchState.videoId;
          this.loading = searchState.loading;
          this.error = searchState.error;
        });
    }
  }
  search(name: string) {
    console.log('ovde');
    if (name.trim() !== '') {
      this.localSearchQuery = name;
      this.store.dispatch(
        SearchActions.searchAction({ query: this.localSearchQuery })
      );
      this.store
        .select((state) => state.videoId)
        .subscribe((searchState) => {
          this.videoId = searchState.videoId;
          this.loading = searchState.loading;
          this.error = searchState.error;
        });
    }
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.videoService.getAllVideoNames().subscribe((names) => {
      this.videoNames = names;
    });
    this.store.select(selectVideoId).subscribe((videoId) => {
      this.videoId = videoId;
    });
    this.store
      .select((state) => state.videoId.loading)
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

  handleVideoNameSelected(videoName: string) {
    this.youTubeService
      .getVideoNameByName(videoName)
      .then((videoTitle) => {
        if (videoTitle) {
          this.videoService.addVideoName(videoTitle);
        } else {
          console.log('Video sa tim nazivom nije pronađen.');
        }
      })
      .catch((error) => {
        console.error('Greška prilikom dohvatanja naziva videa:', error);
      });
  }
}
