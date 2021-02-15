export const kFormatter = (num: number) => {
    const abs: number = parseFloat((Math.abs(num) / 1000).toFixed(1));

    return Math.abs(num) > 999 ? Math.sign(num) * ((abs)) + "K" : Math.sign(num) * Math.abs(num)
}


// function kFormatter(num) {
//     return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
// }