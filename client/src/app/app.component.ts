import { Component } from '@angular/core';
import { Player } from './shared/models/Player';
import { HandGesture } from './shared/enums/handgesture';
import { GameState } from './shared/enums/gamestate';
import { IPlayedGame } from './shared/interfaces/IPlayedGame';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Rock, Paper, Scissors!';
  playLocal: boolean = false;
  player1: Player;
  player2: Player;
  choicePlayer1: HandGesture = null;
  choiceComputerPlayer: HandGesture = null;
  gameStateType= GameState;
  gameHistory: Array<IPlayedGame> = [];

  constructor() {
    this.player1 = new Player(1, false);
    this.player2 = new Player(2, true);
  }

  showWinState(){
    return this.choicePlayer1!==null && this.choiceComputerPlayer!==null;
  }

  getComputerMove() {
    this.choiceComputerPlayer = Math.floor(Math.random() * 3);
  }

  processGesture($event: {player: Player, gesture:HandGesture}) {

   if($event.player.id === 1) {
     this.choicePlayer1 = $event.gesture;
     this.getComputerMove();
     this.gameHistory.push(<IPlayedGame>{
       time: new Date(),
       gameState: this.validateWin(this.choicePlayer1, this.choiceComputerPlayer),
       hands: [this.choicePlayer1, this.choiceComputerPlayer]
     });
   }

  }

  validateWin(hand1: HandGesture, hand2: HandGesture) {

    if(hand1 === HandGesture.Rock && hand2 === HandGesture.Scissor) {
      return GameState.Win;
    } else if(hand1 === HandGesture.Scissor && hand2 === HandGesture.Paper) {
      return GameState.Win;
    } else if(hand1 ===HandGesture.Paper && hand2 === HandGesture.Rock) {
      return GameState.Win;
    } else if(hand1 === hand2) {
      return GameState.Tie;
    }
    return GameState.Lose;
  }

}
