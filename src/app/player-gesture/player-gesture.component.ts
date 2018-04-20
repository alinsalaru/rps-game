import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../shared/models/Player';
import { WinState } from '../shared/enums/winner';
import { HandGesture } from '../shared/enums/handgesture';

@Component({
  selector: 'player-gesture',
  templateUrl: './player-gesture.component.html',
  styleUrls: ['./player-gesture.component.css']
})

export class PlayerGestureComponent implements OnInit {
  @Input('player') playerObject?: Player;
  @Input() gesture: HandGesture;
  @Output() selectHandGesture = new EventEmitter<{player: Player, gesture: HandGesture}>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelectGesture(gesture: HandGesture) {
    //console.log(gesture,'gesture to player-gesture');
    this.selectHandGesture.emit({player: this.playerObject, gesture: gesture});
  }

}
