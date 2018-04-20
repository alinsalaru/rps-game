import { Component, OnInit, Input } from '@angular/core';
import { HandGesture } from '../shared/enums/handgesture';
import { GameState } from '../shared/enums/gamestate';

@Component({
  selector: 'game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.css']
})
export class GameHistoryComponent implements OnInit {
  public gameStateType = GameState;
  public handGestureType = HandGesture;
  @Input() gameHistoryCollection: Array<[HandGesture,HandGesture]>;
  constructor() {
  }

  ngOnInit() {
  }

}
