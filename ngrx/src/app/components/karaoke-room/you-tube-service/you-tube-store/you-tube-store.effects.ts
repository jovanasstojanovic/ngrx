
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, concatMap, take } from 'rxjs/operators';
import * as SearchActions from './you-tube-store.actions';
import { YouTubeService } from '../you-tube.service';

@Injectable()
export class YouTubeStoreEffects {
  constructor(
    private actions$: Actions,
    private youtubeService: YouTubeService
  ) {}

  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.searchAction),
      switchMap(action =>
        this.searchMultipleVideos(action.query).pipe(
          catchError(() => of(SearchActions.searchErrorAction()))
        )
      )
    )
  );



  private searchMultipleVideos(query: string) {
    return this.youtubeService.searchVideos(query, 5).pipe(
      switchMap(response => {
        const videoItems = response.items;
        return this.searchFirstEmbeddableVideo(query, videoItems, 0);
      })
    );
  }

  private searchFirstEmbeddableVideo(query: string, items: any[], index: number)
          :Observable<any> {
    if (index < items.length) {
      const videoId = items[index].id.videoId;
      return this.youtubeService.isVideoEmbeddable(videoId).pipe(
        switchMap(isEmbeddable => {
          if (isEmbeddable) {
            return of(SearchActions.searchSuccessAction({ videoId }));
          } else {
            return this.searchFirstEmbeddableVideo(query, items, index + 1);
          }
        })
      );
    } else {
      return of(SearchActions.searchErrorAction());
    }
  }
}




// // search.effects.ts

// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { merge, of } from 'rxjs';
// import { catchError, map, switchMap } from 'rxjs/operators';

// import * as SearchActions from './you-tube-store.actions';
// import { YouTubeService } from '../you-tube.service';

// @Injectable()
// export class YouTubeStoreEffects {
//   constructor(
//     private actions$: Actions,
//     private youtubeService: YouTubeService
//   ) {}

//   search$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(SearchActions.searchAction),
//       switchMap(action =>
//         {
//           return merge(
//           of(SearchActions.searchLoadingAction()), // Pokreni loading indikator
//           this.youtubeService.searchVideos(action.query).pipe(
//             map(response => {
//               const videoId = response.items[0].id.videoId;
//               return SearchActions.searchSuccessAction({ videoId });
//             }),
//             catchError(() => of({ type: 'Search Error' }))
//           )
//         );
//         }
//       )
//     )
//   );
// }
