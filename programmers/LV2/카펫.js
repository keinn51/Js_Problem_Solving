function solution(brown, yellow) {
    var answer = [];
    let yx = 0,
        yy = 0;

    yy = Math.sqrt(Math.pow((brown - 4) / 4, 2) - yellow) + (brown - 4) / 4;
    yx = yellow / yy;

    return [Math.max(yx, yy) + 2, Math.min(yx, yy) + 2];
}
