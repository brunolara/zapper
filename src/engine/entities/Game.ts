import {Table} from "./Table";
import {Player} from "./Player";
import {GameSet, Guess, Play, Round} from "./interfaces/game";
import {GameSettings, RoundConfig} from "./interfaces/gameConfig";

export class Game{
    public table: Table = new Table();
    public players: Player[] = [];
    public roundConfig: RoundConfig = {
        guessQueue: [],
        playerQueue: [],
        current: undefined,
        plays: [],
        guesses: [],
        rounds: []
    }
    public currentCardCount = 1;
    public rounds: Round[] = [];
    public sets: GameSet[] = [];
    public settings: GameSettings;
    constructor({restartOnCardCount = 6, maxPlayersCount = 6, minPlayersCount = 2}: GameSettings){
        this.settings = {
            restartOnCardCount,
            maxPlayersCount,
            minPlayersCount
        }
        this.init();
        this.table.buildDeck();
    }

    startRound(){
        if(this.currentCardCount > 1)
            this.currentCardCount = this.currentCardCount >= this.settings.restartOnCardCount ? 1 : this.currentCardCount + 1;
        this.roundConfig.guessQueue = [...this.players];
        this.roundConfig.playerQueue = [...this.players];
        this.roundConfig.plays = [];
        this.roundConfig.guesses = [];
        this.giveCardsToPlayers();
    }

    endRound(){
        const winnerPlay = this.getWinnerPlayIndex();
        const winner = winnerPlay === -1
            ? undefined : this.roundConfig.plays[winnerPlay].player;
        const winnerCard = winnerPlay === -1
            ? undefined : this.roundConfig.plays[winnerPlay].card;
        const round: Round = {
            winner,
            winnerCard,
            guesses: this.roundConfig.guesses,
            plays: this.roundConfig.plays
        };
        this.rounds.push(round);
    }

    calculateScore(){
        this.players.map(p => {
            const guess = this.roundConfig.guesses.find( g => g.player.id == p.id);
            const winsOnCurrentRound = this.rounds.reduce((acumulator, currentValue) => {
                const sum =  currentValue.winner?.id === p.id ?  1 : 0;
                return acumulator + sum;
            }, 0);
            p.currentScore += Math.abs(guess!.guess - winsOnCurrentRound);
        });
    }

    endSet(){
        this.sets.push({
            rounds: this.rounds,
            cardCount: this.currentCardCount
        })
    }

    shouldEndGuesses(){
        return this.roundConfig.guessQueue.length === 0;
    }

    shouldEndSet(){
        return this.rounds.length === this.currentCardCount;
    }

    shouldEndRound(){
        return this.roundConfig.playerQueue.length === 0;
    }

    shouldEndGuessRound(){
        return this.roundConfig.guessQueue.length === 0;
    }


    getWinnerPlayIndex(){
        let winnerCard;
        const plays = this.roundConfig.plays;
        const anyJoker = plays[0].card.isJoker;
        /* se todas as cartas forem iguais e nao for manilha retornar -1 */
        if(!anyJoker && plays.every(round => plays[0].card.value === round.card.value))
            return -1;

        let winnerIndex = 0;
        for(let i = 0; i < plays.length; i++){
            if(winnerCard === undefined)
                winnerCard = plays[i].card;
            if(winnerCard.compare(plays[i].card) === -1){
                winnerCard = plays[i].card;
                winnerIndex = i;
            }
        }
        return winnerIndex;
    }

    addGuessToCurrentPlayerOnQueue(guess: number){
        if(this.roundConfig.guessQueue.length === 0)
            throw new Error("No players on guess queue");
        const player = this.roundConfig.guessQueue.shift();
        this.roundConfig.guesses.push({
            guess,
            player: player!,
            winnerRoundsCount: 0
        });
    }

    throwCard(cardIndex: number){
        if(this.roundConfig.playerQueue.length === 0)
            throw new Error("No players on play queue");
        const player = this.roundConfig.playerQueue.shift();
        const card = player!.hand.shift();
        this.roundConfig.plays.push({
            card: card!,
            player: player!
        });
    }

    addPlayer(player: Player){
        if(this.players.length >= this.settings.maxPlayersCount)
            throw new Error("Max players reached");
        this.players.push(player);
    }

    giveCardsToPlayers(){
        this.players.forEach(player => {
            player.hand = this.table.giveCards(this.currentCardCount);
        });
    }

    init(){
        console.log("Game initialized");
        this.shufflePlayers();
    }

    private shufflePlayers(){
        for(let i = this.players.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [this.players[i], this.players[j]] = [this.players[j], this.players[i]];
        }
    }
}