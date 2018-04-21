import { Component, OnInit, Input } from '@angular/core';
import { HandGesture } from '../shared/enums/handgesture';
import { GameState } from '../shared/enums/gamestate';
import { IPlayedGame } from '../shared/interfaces/IPlayedGame';

@Component({
  selector: 'game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.css']
})
export class GameHistoryComponent {
  public gameStateType = GameState;
  public handGestureType = HandGesture;
  @Input() gameHistory: Array<IPlayedGame>;

}
