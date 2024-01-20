export enum CONSOLE_COLORS {
    Reset =  "\x1b[0m",
    Bright =  "\x1b[1m",
    Dim =  "\x1b[2m",
    Underscore =  "\x1b[4m",
    Blink =  "\x1b[5m",
    Reverse =  "\x1b[7m",
    Hidden =  "\x1b[8m",

    FgBlack =  "\x1b[30m",
    FgRed =  "\x1b[31m",
    FgGreen =  "\x1b[32m",
    FgYellow =  "\x1b[33m",
    FgBlue =  "\x1b[34m",
    FgMagenta =  "\x1b[35m",
    FgCyan =  "\x1b[36m",
    FgWhite =  "\x1b[37m",
    FgGray =  "\x1b[90m",

    BgBlack =  "\x1b[40m",
    BgRed =  "\x1b[41m",
    BgGreen =  "\x1b[42m",
    BgYellow =  "\x1b[43m",
    BgBlue =  "\x1b[44m",
    BgMagenta =  "\x1b[45m",
    BgCyan =  "\x1b[46m",
    BgWhite =  "\x1b[47m",
    BgGray =  "\x1b[100m",
}

export const log = (text: string, color: CONSOLE_COLORS = CONSOLE_COLORS.Reset, hCenter = true) => {
    text = hCenter ? centerHorizontalText(text) : text;
    console.log(color + text + CONSOLE_COLORS.Reset);
}
export const box = (pos: number, cardNum: number) =>{
    let str = '';
    pos = (pos - 1) * 3;
    for(let i = 0; i < cardNum; i++){
        if(i === pos || i === (pos+1)){
            str += '■';
        }
        else str += ' '
    }
    console.log(centerHorizontalText(str))
}

export const printLine = (repeat = 1) => {
    const {columns: width} = process.stdout;
    console.log(' '.repeat(width).repeat(repeat));
}

export function centerHorizontalText(text: string){
    const {columns: width, rows: height} = process.stdout;
    const textSize = text.length;
    const sideSize = (width - textSize)/2;
    return ' '.repeat(sideSize) + text + ' '.repeat(sideSize);
}

// ----------BRUNO----------