// youtube.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YouTubeService {
  
  private apiKey: string = 'YOUR_YOUTUBE_API_KEY';

  constructor(private http: HttpClient) {}

  searchVideos(query: string): Observable<any> {
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&q=${query}&type=video&part=snippet&maxResults=1`;
    return this.http.get(apiUrl);
  }
}
