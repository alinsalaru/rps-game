import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HandGesture } from './shared/enums/handgesture';
import { GameState } from './shared/enums/gamestate';
import { PlayerGestureComponent } from './player-gesture/player-gesture.component';
import { SelectHandGestureComponent } from './player-gesture/select-hand-gesture/select-hand-gesture.component';
import { GameHistoryComponent } from './game-history/game-history.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatExpansionModule } from '@angular/material';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PlayerGestureComponent,
        GameHistoryComponent,
        SelectHandGestureComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatExpansionModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it('should validate if human player won against computer', () => {
  //     const comp = new AppComponent();
  //     expect(comp.validateWin(HandGesture.Rock,HandGesture.Paper)).toBe(GameState.Win);
  // })
});
