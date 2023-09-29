import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { addVideoName } from 'src/app/store/video-names-store/video-names.actions';

@Injectable({
  providedIn: 'root',
})
export class VideoNamesService {
  private jsonServerUrl = 'http://localhost:3000/videos';
  constructor(private store: Store, private http: HttpClient) {}

  addVideoName(ime: string) {
    this.store.dispatch(addVideoName({ videoName: ime }));
  }
  getAllVideoNames() {
    console.log('imena');
    return this.http
      .get<string[]>(this.jsonServerUrl)
      .pipe(map((data: any[]) => data.map((item) => item.name)));
  }
}
