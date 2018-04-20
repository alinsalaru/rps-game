import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { HandGesture } from '../../shared/enums/handgesture';

//import paper from 'assets/images/paper-left.svg';

@Component({
  selector: 'select-hand-gesture',
  templateUrl: './select-hand-gesture.component.html',
  styleUrls: ['./select-hand-gesture.component.css']
})

export class SelectHandGestureComponent implements OnInit {
 // paperImage: string = paper;
  public handGestureType = HandGesture;
 // choice: HandGesture = null;
  @Input() isComputer: boolean = false;
  @Input() choice: HandGesture = null;
  @Output() onSelectGesture = new EventEmitter<HandGesture>();

  constructor() {

  }

  ngOnInit() {
   // console.log(this.paperImage);
  }

  checkIfUndefined() {
    return typeof(this.choice) === 'undefined';
  }

  selectGesture(gesture: HandGesture) {
      console.log(gesture, 'selected Gesture');
      this.choice = gesture;
      this.onSelectGesture.emit(this.choice);
  }

}
