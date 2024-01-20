import {ISuit} from "./Suit";
import {baseCards, suits} from "../static/cards";

interface ICard {
    id: number;
    name: CardName;
    suit: ISuit;
    value: number;
    icon: string;
    isJoker: boolean;
}

export enum CardName {
    ace = 'ace',
    two = 'two',
    three = 'three',
    four = 'four',
    five = 'five',
    six = 'six',
    seven = 'seven',
    jack = 'jack',
    queen = 'queen',
    king = 'king'
}

export enum SuitName {
    diamonds = 'diamonds',
    hearts = 'hearts',
    spades = 'spades',
    clubs = 'clubs'
}


export class Card implements ICard{
    public id: number;
    public name: CardName;
    public suit: ISuit;
    public value: number;
    public icon: string;
    public isJoker: boolean;

    constructor({id, name, suit, value, icon, isJoker}: ICard) {
        this.id = id;
        this.name = name;
        this.suit = suit;
        this.value = value;
        this.icon = icon;
        this.isJoker = isJoker;
    }

    static compare(card: Card, card2: Card){
        return card.compare(card2);
    }
    compare(card: Card, mustHaveWinner: boolean = false): 1 | 0 | -1 {
        /* se ele e manilha e eu nao, ele ganha */
        if(!this.isJoker && card.isJoker) return -1;
        /* se eu sou, e ele nao, eu ganho */
        if(this.isJoker && !card.isJoker) return 1;
        /* se ambos sao manilhas, ganha o maior naipe */
        if(this.isJoker && card.isJoker)
            return this.suit.weight > card.suit.weight ? 1 : -1;
        /*se forem iguais empacha */
        if(this.value === card.value && !mustHaveWinner)
            return 0;
        /*se forem iguais mas tem q haver um vencendor, compara naipe */
        if(this.value === card.value && mustHaveWinner)
            return this.suit.weight > card.suit.weight ? 1 : -1;

        /* se chegou aqui, nao sao manilhas nem diff */
        return this.value > card.value ? 1 : -1;
    }

    static getCardById(id: number): Card | null{
        return baseCards.find(card => card.id === id) || null;
    }

    static getCardByName(name: CardName, suitName: SuitName): Card | null{
        const suit = suits.find(suit => suit.name === suitName);
        if(!suit) return null;
        return baseCards.find(card => card.name === name && card.suit.name === suit.name) || null;
    }

    toString(){
        return `${this.icon}${this.suit.icon}`;
    }
}