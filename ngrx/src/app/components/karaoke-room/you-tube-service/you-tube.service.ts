// youtube.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YouTubeService {
  
  private apiKey: string = 'AIzaSyBirflItHvoACBOXU47WyyVedAXy2HACJw';

  constructor(private http: HttpClient) {}

  //   searchVideos(query: string): Observable<any> {
  //     const apiUrl = new URL('https://www.googleapis.com/youtube/v3/search');
  //     apiUrl.searchParams.set('key', this.apiKey);
  //     apiUrl.searchParams.set('q', query);
  //     apiUrl.searchParams.set('type', 'video');
  //     apiUrl.searchParams.set('part', 'snippet');
  //     apiUrl.searchParams.set('maxResults', '1');
  //     return this.http.get(apiUrl.toString());
  // }

  searchVideos(query: string, maxResults: number): Observable<any> {
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&q=${query}&type=video&part=snippet&maxResults=${maxResults}`;
    return this.http.get(apiUrl);
  }

  isVideoEmbeddable(videoId: string): Observable<boolean> {
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?key=${this.apiKey}&id=${videoId}&part=status`;
    return this.http.get(apiUrl).pipe(
      map((response: any) => {
        const status = response.items[0].status.embeddable;
        return status === true;
      })
    );
  }

}
