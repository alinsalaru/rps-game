import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../shared/models/Player';
import { HandGesture } from '../shared/enums/handgesture';

@Component({
  selector: 'player-gesture',
  templateUrl: './player-gesture.component.html',
  styleUrls: ['./player-gesture.component.css']
})

export class PlayerGestureComponent{
  @Input() player: Player;
  @Input() gesture: HandGesture;
  @Output() selectHandGesture = new EventEmitter<{player: Player, gesture: HandGesture}>();

  onSelectGesture(gesture: HandGesture) {
    this.selectHandGesture.emit({player: this.player, gesture: gesture});
  }

}
