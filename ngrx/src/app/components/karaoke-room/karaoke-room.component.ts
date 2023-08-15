import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as SearchActions from './you-tube-service/you-tube-store/you-tube-store.actions';
import { AppState } from 'src/app/app.state';
import { selectVideoId } from './you-tube-service/you-tube-store/you-tube-store.selectors';

@Component({
  selector: 'app-karaoke-room',
  templateUrl: './karaoke-room.component.html',
  styleUrls: ['./karaoke-room.component.css']
})
export class KaraokeRoomComponent implements OnInit{


  constructor(private store: Store<AppState>) {}

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
  }

}
