import { GameState } from "../enums/gamestate";
import { HandGesture } from "../enums/handgesture";

export interface IPlayedGame {
  time: Date;
  gameState: GameState,
  hands: [HandGesture,HandGesture]
}
