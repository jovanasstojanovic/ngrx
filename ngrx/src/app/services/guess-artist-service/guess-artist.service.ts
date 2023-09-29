import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { GuessArtistInterface } from 'src/interfaces/guess-artist.interface';

@Injectable({
  providedIn: 'root',
})
export class GuessArtistService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getGuessTheArtist(): Observable<GuessArtistInterface> {
    let randomNumber: number = Math.floor(Math.random() * 4) + 1;
    console.log(randomNumber);
    const headers = new HttpHeaders().set('Cache-Control', 'no-cache');
    return this.http
      .get<any[]>(`${this.apiUrl}/guessArtist/${randomNumber}`, { headers })
      .pipe(
        tap((data: any[]) => {
          console.log('Podaci sa servera:', data); // Dodajte ovu liniju za ispis podataka sa servera
        }),
        map((data: any) => {
          if (
            data.id &&
            data.song &&
            data.o1 &&
            data.o2 &&
            data.o3 &&
            data.solution
          ) {
            return {
              id: data.id,
              song: data.song,
              o1: data.o1,
              o2: data.o2,
              o3: data.o3,
              solution: data.solution,
            } as GuessArtistInterface;
          } else {
            console.error('Neispravni podaci sa servera.'); // Dodajte ovu liniju za ispis greške
            throw new Error('Neispravni podaci sa servera.');
          }
        })
      );
  }
}
