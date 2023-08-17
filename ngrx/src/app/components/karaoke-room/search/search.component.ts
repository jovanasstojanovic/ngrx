import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit,OnChanges{
  @Input() videoId: string = '';

  @Output() videoNameSelected: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    console.log("ovde sam");
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.videoId) {
      // Kada se videoId promeni, automatski čuvajte naziv videa
      this.saveVideoName(this.videoId);
    }
  }

  saveVideoName(videoName: string) {
  // Emitovanje naziva videa
  this.videoNameSelected.emit(videoName);
}


  constructor(private domSanitizer: DomSanitizer)
  {

  }

  get videoUrl() {
    const url = `https://www.youtube.com/embed/${this.videoId}?fs=1&vq=high&modestbranding=1?autoplay=0&rel=0`;

    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
