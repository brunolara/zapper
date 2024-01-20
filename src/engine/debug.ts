import {Card} from "./entities/Card";
import {Game} from "./entities/Game";

export class Debug{
    game: Game;
    constructor(game: Game) {
        this.game = game;
    }

    getRoundWinner(){
        const winnerIndex = this.game.getWinnerPlayIndex();
        if(winnerIndex === -1){
            return console.log("Empate");
        }
        const winnerPlay = this.game.roundConfig.plays[winnerIndex];
        console.log(winnerPlay.player.name, '- venceu - ', winnerPlay.card.toString());
    }

    compareCards(c1: Card, c2: Card): void{
        const result = c1.compare(c2);

        if(result === 1){
            return console.log(` ${c1} ganha de ${c2}`);
        }
        if(result === -1){
            return console.log(` ${c2} ganha de ${c1}`);
        }

        return console.log(` ${c1} e ${c2} são iguais`);
    }

    showHands(){
        this.game.players.forEach(p => p.printHand());
    }

    showGuesses(){
        this.game.roundConfig.guesses.forEach(guess => {
            console.log(guess.player.name, " - ", guess.guess);
        });
    }

    showPlays(){
        this.game.roundConfig.plays.forEach(play => {
            console.log(play.player.name, " - ", play.card.toString());
        });
    }
}

