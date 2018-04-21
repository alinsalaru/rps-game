import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerGestureComponent } from './player-gesture.component';
import { SelectHandGestureComponent } from './select-hand-gesture/select-hand-gesture.component';
import { AppComponent } from '../app.component';

describe('PlayerGestureComponent', () => {
  let component: PlayerGestureComponent;
  let fixture: ComponentFixture<PlayerGestureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerGestureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerGestureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
