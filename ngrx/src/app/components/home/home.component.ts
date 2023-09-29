import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YouTubeService } from '../../services/you-tube-service/you-tube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  pictures = new Array(8);

  constructor(private router: Router) {}

  goToKaraokeRoom() {
    this.router.navigate(['/karaoke-room']);
  }
}
