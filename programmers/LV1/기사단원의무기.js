function getYakSooCnt(num) {
    let count = 0,
        side = 0;
    if (num === 1) return 1;
    for (let _num = 1; _num <= num; _num++) {
        if (num % _num !== 0) continue;
        if (_num === side) return count * 2;
        side = num / _num;
        if (_num === side) return count * 2 + 1;
        count += 1;
    }
    return count;
}

function solution(number, limit, power) {
    let count = 0;
    for (let num = 1; num <= number; num++) {
        let _yakSooCnt = getYakSooCnt(num);
        if (_yakSooCnt > limit) _yakSooCnt = power;
        count += _yakSooCnt;
    }
    return count;
}
