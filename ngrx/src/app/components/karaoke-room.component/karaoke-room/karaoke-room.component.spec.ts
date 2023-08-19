import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaraokeRoomComponent } from './karaoke-room.component';

describe('KaraokeRoomComponent', () => {
  let component: KaraokeRoomComponent;
  let fixture: ComponentFixture<KaraokeRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KaraokeRoomComponent]
    });
    fixture = TestBed.createComponent(KaraokeRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
