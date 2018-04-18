import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../shared/models/Player';
import { WinState } from '../shared/enums/winner';

@Component({
  selector: 'player-gesture',
  templateUrl: './player-gesture.component.html',
  styleUrls: ['./player-gesture.component.css']
})

export class PlayerGestureComponent implements OnInit {
  @Input() isComputer: boolean;
  private player: Player;

  constructor() {}

  ngOnInit() {
    this.player = new Player(1, this.isComputer);
    this.player.winState = WinState.Win;
    console.log(this.player.computer,'isComputer');
    console.log(WinState[this.player.winState], 'winState');
  }

}
