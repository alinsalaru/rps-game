import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHandGestureComponent } from './select-hand-gesture.component';
import { PlayerGestureComponent } from '../player-gesture.component';

describe('SelectHandGestureComponent', () => {
  let component: SelectHandGestureComponent;
  let fixture: ComponentFixture<SelectHandGestureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectHandGestureComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectHandGestureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
