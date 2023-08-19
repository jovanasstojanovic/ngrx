import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YouTubeService } from '../../services/you-tube-service/you-tube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  pictures = new Array(8);
  trendingVideos: any[] = [];

  constructor( private router: Router, private youTubeService:YouTubeService) {}

  goToKaraokeRoom() {
    this.router.navigate(['/karaoke-room']);
  }


  ngOnInit(): void {
    this.getTrendingVideos();
  }

  getTrendingVideos() {
    this.youTubeService.getTrendingVideos()
      .subscribe((response: any) => {
          this.trendingVideos = response.items;
        }
      );
  }
}
