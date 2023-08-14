import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameSharingService {

  private currentName: string = '';

  setCurrentName(name: string) {
    this.currentName = name;
  }

  getCurrentName(): string {
    return this.currentName;
  }

}
