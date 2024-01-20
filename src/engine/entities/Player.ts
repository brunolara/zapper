import {Card} from "./Card";
import {v4 as uuid} from "uuid"

export class Player{
    public id: string;
    public name: string;
    public hand: Card[] = [];
    public tableOrder: number = 0;
    public currentScore = 0;
    public isBot = false;
    constructor(name: string, isBot = true) {
        this.id = uuid();
        this.name = name;
        this.isBot = isBot;
    }

    playCard(index: number){
        const card = this.hand[index];
        this.hand.splice(index, 1);
        return card;
    }

    printHand(){
        return this.hand.map(card => {
            return card.toString()
        }).join(" ");
    }
}