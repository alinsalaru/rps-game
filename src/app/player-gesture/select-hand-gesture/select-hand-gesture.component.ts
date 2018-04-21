import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { HandGesture } from '../../shared/enums/handgesture';

@Component({
  selector: 'select-hand-gesture',
  templateUrl: './select-hand-gesture.component.html',
  styleUrls: ['./select-hand-gesture.component.css']
})

export class SelectHandGestureComponent {
  public handGestureType = HandGesture;
  @Input() isComputer: boolean = false;
  @Input() choice: HandGesture = null;
  @Output() onSelectGesture = new EventEmitter<HandGesture>();

  checkChoiceValidity() {
    return this.choice!==null && typeof(this.choice) !== 'undefined';
  }

  selectGesture(gesture: HandGesture) {
      this.choice = gesture;
      this.onSelectGesture.emit(this.choice);
  }

}
