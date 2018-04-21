import { GameState } from "../enums/gamestate";
import { HandGesture } from "../enums/handgesture";

export interface IGame {
  time: Date;
  gameState: GameState,
  hands: [HandGesture,HandGesture]
}
