import {baseCards, suits} from '../static/cards'
import {Card} from "./Card";
export class Table {
    public deck: Card[] = baseCards;
    public jokerFather: Card = {} as Card;

    constructor() {
        this.buildDeck()
    }
    public buildDeck(){
        this.shuffleDeck()
        this.chooseRandomJoker()
    }

    private chooseRandomJoker(){
        this.jokerFather = this.chooseRandomCard();
        this.deck = this.deck.map(card => {
            let value = false;
            if(card.value === 10 && this.jokerFather.value === 1)
                value = true;
           if((card.value -1) === this.jokerFather.value)
               value = true;
           card.isJoker = value;
           return card;
        });
    }

    public giveCards(count: number): Card[]{
        const cards: Card[] = [];
        for(let i = 0; i < count; i++){
            cards.push(this.chooseRandomCard());
        }
        return cards;
    }

    public printDeck(){
        // console.log(JSON.stringify(this.deck.map((card, i) => ({ id: i + 1,...card}))));
        // console.log(this.deck.find(card => card.isJoker));
    }

    private chooseRandomCard(){
        const randomIndex = Math.floor(Math.random() * this.deck.length);
        const card = this.deck[randomIndex];
        this.deck.splice(randomIndex, 1);
        return card;
    }

    private shuffleDeck(){
        for(let i = this.deck.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
}