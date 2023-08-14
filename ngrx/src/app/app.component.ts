import { Component, OnInit } from '@angular/core';
import { NameSharingService } from './service/name-sharing.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private nameService: NameSharingService, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const name = this.nameService.getCurrentName();
        this.nameService.setCurrentName(name);
      }
    });
  }
  
  title = 'myApp';
}
