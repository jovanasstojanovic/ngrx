import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { KaraokeRoomComponent } from './components/karaoke-room.component/karaoke-room/karaoke-room.component';

import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/karaoke-room.component/search/search.component';
import { YouTubeStoreEffects } from './store/you-tube-store/you-tube-store.effects';
import { HttpClientModule } from '@angular/common/http';
import { youTubeStoreReducer } from './store/you-tube-store/you-tube-store.reducer';
import { videoNamesReducer } from './store/video-names-store/video-names.reducer';
import { VideoNamesEffects } from './store/video-names-store/video-names.effects';
import { QuizComponent } from './components/home/quiz/quiz.component';
import { TopListComponent } from './components/home/top-list/top-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KaraokeRoomComponent,
    SearchComponent,
    QuizComponent,
    TopListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      videoId: youTubeStoreReducer,
      videoNames: videoNamesReducer,
    }),
    FormsModule,
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([YouTubeStoreEffects, VideoNamesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
