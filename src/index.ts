import {Player} from "./engine/entities/Player";
import {Game} from "./engine/entities/Game";
import {GameSettings} from "./engine/entities/interfaces/gameConfig";
import {Debug} from "./engine/debug";
import readLineSync from 'readline-sync';
import {listenArrowEvents, printTable} from "./ui";

const game = new Game({} as GameSettings);
game.currentCardCount = 3;
const debug = new Debug(game);
const players: Player[] = []
players.push(new Player("Player 1", false));
players.push(new Player("Player 2"));
players.push(new Player("Player 3"));
players.forEach(p => game.addPlayer(p))
game.startRound();



// let res = '-1';
// while(res !== '0') {
//     res = readLineSync.keyIn('',
//         {hideEchoBack: true, mask: '', limit: 'zx '});
//     console.log("res", res)
//     if(res === '0') continue;
//     if(res === '1') {
//         debug.showHands();
//     }
// }

printTable(game)
let cursorPos = 1;
listenArrowEvents((ch: any, key: any) => {
    if(key.name === 'left' && cursorPos > 1)
        printTable(game, --cursorPos)
    if(key.name === 'right' && cursorPos < game.currentCardCount)
        printTable(game, ++cursorPos)
    if (key && key.ctrl && key.name == 'c') {
        process.stdin.pause();
    }
})