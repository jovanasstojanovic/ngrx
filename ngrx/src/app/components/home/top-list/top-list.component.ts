import { Component, OnInit } from '@angular/core';
import { YouTubeService } from 'src/app/services/you-tube-service/you-tube.service';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.css'],
})
export class TopListComponent implements OnInit {
  trendingVideos: any[] = [];
  constructor(private youTubeService: YouTubeService) {}
  ngOnInit(): void {
    this.getTrendingVideos();
  }

  getTrendingVideos() {
    this.youTubeService.getTrendingVideos().subscribe((response: any) => {
      this.trendingVideos = response.items;
    });
  }
}
