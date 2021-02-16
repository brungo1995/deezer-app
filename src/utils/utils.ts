export const kFormatter = (num: number) => {
    const abs: number = parseFloat((Math.abs(num) / 1000).toFixed(1));

    return Math.abs(num) > 999 ? Math.sign(num) * ((abs)) + "K" : Math.sign(num) * Math.abs(num)
}

export const secondsToMinutes = (time: number) => {
    return Math.floor(time / 60) + ':' + Math.floor(time % 60);
}


// function kFormatter(num) {
//     return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
// }