import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() videoId: string = '';
  
  get videoUrl() {
    return `https://www.youtube.com/embed/${this.videoId}`;
  }
}
