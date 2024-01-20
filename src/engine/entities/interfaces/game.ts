import {Player} from "../Player";
import {Card} from "../Card";

export interface Play{
    player: Player;
    card: Card;
}

export interface Guess{
    player: Player;
    guess: number;
    winnerRoundsCount: number;
}

export interface Round {
    winner?: Player;
    winnerCard?: Card;
    guesses: Guess[];
    plays: Play[]
}

export interface GameSet{
    rounds: Round[];
    cardCount: number;
}