import {Guess, Play, Round} from "./game";
import {Player} from "../Player";


export interface GameSettings{
    restartOnCardCount: number;
    maxPlayersCount: number;
    minPlayersCount: number;
}
export interface RoundConfig{
    current?: Round;
    playerQueue: Player[];
    guessQueue: Player[];
    plays: Play[];
    guesses: Guess[];
    rounds: Round[];
}