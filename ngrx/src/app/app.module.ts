import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { KaraokeRoomComponent } from './components/karaoke-room/karaoke-room.component';

import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/karaoke-room/search/search.component';
import { YouTubeStoreEffects } from './components/karaoke-room/you-tube-service/you-tube-store/you-tube-store.effects';
import { HttpClientModule } from '@angular/common/http';
import { youTubeStoreReducer } from './components/karaoke-room/you-tube-service/you-tube-store/you-tube-store.reducer';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KaraokeRoomComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      videoId:youTubeStoreReducer
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([YouTubeStoreEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
