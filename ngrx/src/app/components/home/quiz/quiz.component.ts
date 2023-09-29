import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { map } from 'rxjs';
import { ArtistPhotoService } from 'src/app/services/artist-photo/artist-photo.service';
import { ContinueLyricsService } from 'src/app/services/continue-lyrics-service/continue-lyrics.service';
import { GuessArtistService } from 'src/app/services/guess-artist-service/guess-artist.service';
import { ResultService } from 'src/app/services/result-service/result.service';
import { ArtistPhotoInterface } from 'src/interfaces/artist-photo.interface';
import { ContinueLyricsInterface } from 'src/interfaces/continue-lyrics.interface';
import { GuessArtistInterface } from 'src/interfaces/guess-artist.interface';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit, OnChanges {
  responseRecommendation: string = '';
  question1: ContinueLyricsInterface = {
    o1: '',
    o2: '',
    o3: '',
    song: '',
    solution: '',
    id: 0,
  };

  question2: GuessArtistInterface = {
    o1: '',
    o2: '',
    o3: '',
    song: '',
    solution: '',
    id: 0,
  };

  question3: ArtistPhotoInterface = {
    o1: '',
    o2: '',
    o3: '',
    url: '',
    solution: '',
    id: 0,
  };
  dotsArray = new Array(15);
  loading: boolean = false;
  selectedOption1: string | null = '';
  selectedOption2: string | null = '';
  selectedOption3: string | null = '';

  constructor(
    private lyricsService: ContinueLyricsService,
    private guessArtistService: GuessArtistService,
    private artistPhotoService: ArtistPhotoService,
    private resultService: ResultService
  ) {}

  ngOnChanges(changes: SimpleChanges) {}

  typeConfiguration() {
    this.loading = true;
    console.log(this.selectedOption1);
    const prvo: boolean = this.selectedOption1 == this.question1.solution;
    const drugo: boolean = this.selectedOption2 == this.question2.solution;
    const trece: boolean = this.selectedOption3 == this.question3.solution;
    let prviOdg: string;
    this.resultService.getResult(1).subscribe((data1) => {
      prviOdg = prvo ? data1.playlist : '';
      let drugiOdg: string;
      this.resultService.getResult(2).subscribe((data2) => {
        drugiOdg = drugo ? data2.playlist : '';
        let treciOdg: string;
        this.resultService.getResult(3).subscribe((data3) => {
          treciOdg = trece ? data3.playlist : '';
          setTimeout(() => {
            this.loading = false;
            this.responseRecommendation =
              prviOdg + ', ' + drugiOdg + ', ' + treciOdg;
            this.selectedOption1 = null;
            this.selectedOption2 = null;
            this.selectedOption3 = null;
          }, 1000);
        });
      });
    });
    this.lyricsService
      .getContinueLyrics()
      .subscribe((data: ContinueLyricsInterface) => {
        this.question1 = data;
      });
    this.guessArtistService
      .getGuessTheArtist()
      .subscribe((data: GuessArtistInterface) => {
        this.question2 = data;
      });
    this.artistPhotoService
      .getArtistPhoto()
      .subscribe((data: ArtistPhotoInterface) => {
        this.question3 = data;
      });
  }

  ngOnInit(): void {
    this.lyricsService
      .getContinueLyrics()
      .subscribe((data: ContinueLyricsInterface) => {
        this.question1 = data;
      });
    this.guessArtistService
      .getGuessTheArtist()
      .subscribe((data: GuessArtistInterface) => {
        this.question2 = data;
      });
    this.artistPhotoService
      .getArtistPhoto()
      .subscribe((data: ArtistPhotoInterface) => {
        this.question3 = data;
      });
  }
}
