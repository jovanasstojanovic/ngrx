import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  @Input() videoId: string = '';


  ngOnInit(): void {
    console.log("ovde sam");
  }

  constructor(private domSanitizer: DomSanitizer)
  {

  }
  
  get videoUrl() {
    const url = `https://www.youtube.com/embed/${this.videoId}?fs=1&vq=high&modestbranding=1?autoplay=0&rel=0`;
    console.log(url);
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
