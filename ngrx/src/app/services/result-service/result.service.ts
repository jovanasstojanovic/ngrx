import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map, tap } from 'rxjs';
import { ResultInterface } from 'src/interfaces/result.interface';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getResult(index: number): Observable<ResultInterface> {
    const headers = new HttpHeaders().set('Cache-Control', 'no-cache');
    return this.http
      .get<any>(`${this.apiUrl}/results/${index}`, { headers })
      .pipe(
        tap((data: any[]) => {
          console.log('Podaci sa servera:', data); // Dodajte ovu liniju za ispis podataka sa servera
        }),
        map((data: any) => {
          if (data.id && data.guessed && data.playlist) {
            return {
              id: data.id,
              guessed: data.guessed,
              playlist: data.playlist,
            } as ResultInterface;
          } else {
            console.error('Neispravni podaci sa servera.'); // Dodajte ovu liniju za ispis greške
            throw new Error('Neispravni podaci sa servera.');
          }
        })
      );
  }
}
