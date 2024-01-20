import {Game} from "../engine/entities/Game";
import {box, CONSOLE_COLORS, log, printLine} from "./helper";
const keypress = require('keypress');

export function mainMenu(game: Game) {
    const options = {
        'Add Player': () => {},
        'Show players': () => {},
        'Start game': () => {},
    };
}

export const listenArrowEvents = (callback: any) => {
    keypress(process.stdin);
// listen for the "keypress" event

    process.stdin.on('keypress', callback);

    process.stdin.setRawMode(true);
    process.stdin.resume();
}

export const printTable = (game: Game, cursorPos: number = 1) => {
    // process.stdout.write('\\033c');
    console.clear()
    const {rows: height} = process.stdout;
    const [currentPlayer] = game.roundConfig.playerQueue;
    const itsMe = !currentPlayer.isBot;
    const hand = itsMe ? currentPlayer.printHand() : '*'.repeat(currentPlayer.hand.length);
    const title = itsMe ? 'Sua vez' : `Vez do ${currentPlayer.name}`;
    const titleColor = itsMe ? CONSOLE_COLORS.BgGreen : CONSOLE_COLORS.BgRed;
    log((title), titleColor, true);
    // printLine(5);
    log(`Coringa ${game.table.jokerFather}`, CONSOLE_COLORS.BgWhite)
    printLine(height - 6);
    log('Selecione uma carta')
    log((`${hand}`),  CONSOLE_COLORS.BgBlack);
    box(cursorPos, hand.length)
}
