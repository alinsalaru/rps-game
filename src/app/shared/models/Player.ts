import { WinState } from "../enums/winner";

export class Player {
    id: number;
    computer: boolean;
    private winner: WinState;

    constructor(_id: number, _computer: boolean) {
        this.id = _id;
        this.computer = _computer;
    }

    set winState(state : WinState) {
        this.winner = state;
    }

    get winState() {
      return this.winner;
    }
}
