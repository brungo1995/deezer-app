export const formatFansNumberInK = (num: number) => {
    const abs: number = parseFloat((Math.abs(num) / 1000).toFixed(1));

    return Math.abs(num) > 999 ? Math.sign(num) * ((abs)) + "K" : Math.sign(num) * Math.abs(num)
}

export const secondsToMinutes = (time: number) => {
    return Math.floor(time / 60) + ':' + Math.floor(time % 60);
}
