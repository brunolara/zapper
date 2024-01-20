import {ISuit} from "../entities/Suit";
import {Card, CardName, SuitName} from "../entities/Card";

export const baseCards = [
    {
    "id": 0,
    "name": CardName.ace,
    "suit": {"name": SuitName.diamonds, "weight": 1, "icon": "♦"},
    "value": 8,
    "icon": "A",
    "isJoker": false
}, {
    "id": 1,
    "name": CardName.ace,
    "suit": {"name": SuitName.hearts, "weight": 2, "icon": "♥"},
    "value": 8,
    "icon": "A",
    "isJoker": false
}, {
    "id": 2,
    "name": CardName.ace,
    "suit": {"name": SuitName.spades, "weight": 3, "icon": "♠"},
    "value": 8,
    "icon": "A",
    "isJoker": false
}, {
    "id": 3,
    "name": CardName.ace,
    "suit": {"name": SuitName.clubs, "weight": 4, "icon": "♣"},
    "value": 8,
    "icon": "A",
    "isJoker": false
}, {
    "id": 4,
    "name": CardName.two,
    "suit": {"name": SuitName.diamonds, "weight": 1, "icon": "♦"},
    "value": 9,
    "icon": "2",
    "isJoker": false
}, {
    "id": 5,
    "name": CardName.two,
    "suit": {"name": SuitName.hearts, "weight": 2, "icon": "♥"},
    "value": 9,
    "icon": "2",
    "isJoker": false
}, {
    "id": 6,
    "name": CardName.two,
    "suit": {"name": SuitName.spades, "weight": 3, "icon": "♠"},
    "value": 9,
    "icon": "2",
    "isJoker": false
}, {
    "id": 7,
    "name": CardName.two,
    "suit": {"name": SuitName.clubs, "weight": 4, "icon": "♣"},
    "value": 9,
    "icon": "2",
    "isJoker": false
}, {
    "id": 8,
    "name": CardName.three,
    "suit": {"name": SuitName.diamonds, "weight": 1, "icon": "♦"},
    "value": 10,
    "icon": "3",
    "isJoker": false
}, {
    "id": 9,
    "name": CardName.three,
    "suit": {"name": SuitName.hearts, "weight": 2, "icon": "♥"},
    "value": 10,
    "icon": "3",
    "isJoker": false
}, {
    "id": 10,
    "name": CardName.three,
    "suit": {"name": SuitName.spades, "weight": 3, "icon": "♠"},
    "value": 10,
    "icon": "3",
    "isJoker": false
}, {
    "id": 11,
    "name": CardName.three,
    "suit": {"name": SuitName.clubs, "weight": 4, "icon": "♣"},
    "value": 10,
    "icon": "3",
    "isJoker": false
}, {
    "id": 12,
    "name": CardName.four,
    "suit": {"name": SuitName.diamonds, "weight": 1, "icon": "♦"},
    "value": 1,
    "icon": "4",
    "isJoker": false
}, {
    "id": 13,
    "name": CardName.four,
    "suit": {"name": SuitName.hearts, "weight": 2, "icon": "♥"},
    "value": 1,
    "icon": "4",
    "isJoker": false
}, {
    "id": 14,
    "name": CardName.four,
    "suit": {"name": SuitName.spades, "weight": 3, "icon": "♠"},
    "value": 1,
    "icon": "4",
    "isJoker": false
}, {
    "id": 15,
    "name": CardName.four,
    "suit": {"name": SuitName.clubs, "weight": 4, "icon": "♣"},
    "value": 1,
    "icon": "4",
    "isJoker": false
}, {
    "id": 16,
    "name": CardName.five,
    "suit": {"name": SuitName.diamonds, "weight": 1, "icon": "♦"},
    "value": 2,
    "icon": "5",
    "isJoker": false
}, {
    "id": 17,
    "name": CardName.five,
    "suit": {"name": SuitName.hearts, "weight": 2, "icon": "♥"},
    "value": 2,
    "icon": "5",
    "isJoker": false
}, {
    "id": 18,
    "name": CardName.five,
    "suit": {"name": SuitName.spades, "weight": 3, "icon": "♠"},
    "value": 2,
    "icon": "5",
    "isJoker": false
}, {
    "id": 19,
    "name": CardName.five,
    "suit": {"name": SuitName.clubs, "weight": 4, "icon": "♣"},
    "value": 2,
    "icon": "5",
    "isJoker": false
}, {
    "id": 20,
    "name": CardName.six,
    "suit": {"name": SuitName.diamonds, "weight": 1, "icon": "♦"},
    "value": 3,
    "icon": "6",
    "isJoker": false
}, {
    "id": 21,
    "name": CardName.six,
    "suit": {"name": SuitName.hearts, "weight": 2, "icon": "♥"},
    "value": 3,
    "icon": "6",
    "isJoker": false
}, {
    "id": 22,
    "name": CardName.six,
    "suit": {"name": SuitName.spades, "weight": 3, "icon": "♠"},
    "value": 3,
    "icon": "6",
    "isJoker": false
}, {
    "id": 23,
    "name": CardName.six,
    "suit": {"name": SuitName.clubs, "weight": 4, "icon": "♣"},
    "value": 3,
    "icon": "6",
    "isJoker": false
}, {
    "id": 24,
    "name": CardName.seven,
    "suit": {"name": SuitName.diamonds, "weight": 1, "icon": "♦"},
    "value": 4,
    "icon": "7",
    "isJoker": false
}, {
    "id": 25,
    "name": CardName.seven,
    "suit": {"name": SuitName.hearts, "weight": 2, "icon": "♥"},
    "value": 4,
    "icon": "7",
    "isJoker": false
}, {
    "id": 26,
    "name": CardName.seven,
    "suit": {"name": SuitName.spades, "weight": 3, "icon": "♠"},
    "value": 4,
    "icon": "7",
    "isJoker": false
}, {
    "id": 27,
    "name": CardName.seven,
    "suit": {"name": SuitName.clubs, "weight": 4, "icon": "♣"},
    "value": 4,
    "icon": "7",
    "isJoker": false
}, {
    "id": 28,
    "name": CardName.queen,
    "suit": {"name": SuitName.diamonds, "weight": 1, "icon": "♦"},
    "value": 5,
    "icon": "Q",
    "isJoker": false
}, {
    "id": 29,
    "name": CardName.queen,
    "suit": {"name": SuitName.hearts, "weight": 2, "icon": "♥"},
    "value": 5,
    "icon": "Q",
    "isJoker": false
}, {
    "id": 30,
    "name": CardName.queen,
    "suit": {"name": SuitName.spades, "weight": 3, "icon": "♠"},
    "value": 5,
    "icon": "Q",
    "isJoker": false
}, {
    "id": 31,
    "name": CardName.queen,
    "suit": {"name": SuitName.clubs, "weight": 4, "icon": "♣"},
    "value": 5,
    "icon": "Q",
    "isJoker": false
}, {
    "id": 32,
    "name": CardName.jack,
    "suit": {"name": SuitName.diamonds, "weight": 1, "icon": "♦"},
    "value": 6,
    "icon": "J",
    "isJoker": false
}, {
    "id": 33,
    "name": CardName.jack,
    "suit": {"name": SuitName.hearts, "weight": 2, "icon": "♥"},
    "value": 6,
    "icon": "J",
    "isJoker": false
}, {
    "id": 34,
    "name": CardName.jack,
    "suit": {"name": SuitName.spades, "weight": 3, "icon": "♠"},
    "value": 6,
    "icon": "J",
    "isJoker": false
}, {
    "id": 35,
    "name": CardName.jack,
    "suit": {"name": SuitName.clubs, "weight": 4, "icon": "♣"},
    "value": 6,
    "icon": "J",
    "isJoker": false
}, {
    "id": 36,
    "name": CardName.king,
    "suit": {"name": SuitName.diamonds, "weight": 1, "icon": "♦"},
    "value": 7,
    "icon": "K",
    "isJoker": false
}, {
    "id": 37,
    "name": CardName.king,
    "suit": {"name": SuitName.hearts, "weight": 2, "icon": "♥"},
    "value": 7,
    "icon": "K",
    "isJoker": false
}, {
    "id": 38,
    "name": CardName.king,
    "suit": {"name": SuitName.spades, "weight": 3, "icon": "♠"},
    "value": 7,
    "icon": "K",
    "isJoker": false
}, {
    "id": 39,
    "name": CardName.king,
    "suit": {"name": SuitName.clubs, "weight": 4, "icon": "♣"},
    "value": 7,
    "icon": "K",
    "isJoker": false
}
].map(c => new Card(c))


export const suits: ISuit[] = [
    {name: SuitName.diamonds, weight: 1, icon: '♦'},
    {name: SuitName.hearts, weight: 2, icon: '♥'},
    {name: SuitName.spades, weight: 3, icon: '♠'},
    {name: SuitName.clubs, weight: 4, icon: '♣'}
];