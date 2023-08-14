import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as SearchActions from './you-tube-service/you-tube-store/you-tube-store.actions';

@Component({
  selector: 'app-karaoke-room',
  templateUrl: './karaoke-room.component.html',
  styleUrls: ['./karaoke-room.component.css']
})
export class KaraokeRoomComponent implements OnInit{


  constructor(private store: Store) {}

  searchQuery: string = '';
  videoId: string = '';

  performSearch() {
    if (this.searchQuery.trim() !== '') {
      this.store.dispatch(SearchActions.searchAction({ query: this.searchQuery }));
    }
  }

  ngOnInit() {
    
  }

}
