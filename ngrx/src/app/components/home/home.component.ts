import { Component, OnInit } from '@angular/core';
import { NameSharingService } from '../../service/name-sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

 

  constructor( private router: Router) {}

  goToKaraokeRoom() {
    this.router.navigate(['/karaoke-room']);
  }


  ngOnInit(): void {
    
  }

}
