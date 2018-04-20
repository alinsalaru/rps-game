import { GameState } from "../enums/gamestate";
import { HandGesture } from "../enums/handgesture";

export interface IGameCollection {
  time: Date;
  gameState: GameState,
  hands: [HandGesture,HandGesture]
}
