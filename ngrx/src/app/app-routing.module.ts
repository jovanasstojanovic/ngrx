import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { KaraokeRoomComponent } from './components/karaoke-room/karaoke-room.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'karaoke-room', component: KaraokeRoomComponent },
  { path: '**', redirectTo: '' } // Redirekcija za nepostojeće rute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
