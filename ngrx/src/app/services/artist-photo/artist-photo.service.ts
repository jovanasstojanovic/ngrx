import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ArtistPhotoInterface } from 'src/interfaces/artist-photo.interface';

@Injectable({
  providedIn: 'root',
})
export class ArtistPhotoService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getArtistPhoto(): Observable<ArtistPhotoInterface> {
    let randomNumber: number = Math.floor(Math.random() * 4) + 1;
    console.log(randomNumber);
    const headers = new HttpHeaders().set('Cache-Control', 'no-cache');
    return this.http
      .get<any[]>(`${this.apiUrl}/artistPhoto/${randomNumber}`, { headers })
      .pipe(
        tap((data: any[]) => {
          console.log('Podaci sa servera:', data); // Dodajte ovu liniju za ispis podataka sa servera
        }),
        map((data: any) => {
          if (
            data.id &&
            data.url &&
            data.o1 &&
            data.o2 &&
            data.o3 &&
            data.solution
          ) {
            return {
              id: data.id,
              url: data.url,
              o1: data.o1,
              o2: data.o2,
              o3: data.o3,
              solution: data.solution,
            } as ArtistPhotoInterface;
          } else {
            console.error('Neispravni podaci sa servera.'); // Dodajte ovu liniju za ispis greške
            throw new Error('Neispravni podaci sa servera.');
          }
        })
      );
  }
}
