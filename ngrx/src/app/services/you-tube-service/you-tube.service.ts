import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YouTubeService {

  private apiKey: string = 'AIzaSyBirflItHvoACBOXU47WyyVedAXy2HACJw';

  constructor(private http: HttpClient) { }

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

  getTrendingVideos(): Observable<any> {
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${this.apiKey}`;
    return this.http.get(apiUrl);
  }


  getVideoNameByName(videoName: string): Promise<string | null> {
    return new Promise((resolve, reject) => {
      this.searchVideos(videoName, 1).pipe(
        map((response: any) => {
          if (response.items && response.items.length > 0) {
            return response.items[0].snippet.title;
          } else {
            return null;
          }
        })
      ).subscribe(
        (videoId: string | null) => {
          resolve(videoId);
        }
      );
    });
  }
}
