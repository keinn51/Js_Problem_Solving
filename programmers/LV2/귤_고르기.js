function solution(k, tangerine) {
    const infoObj = {};
    let target = k;
    let result = 0;
    for (let type of tangerine) {
        if (infoObj[type] === undefined) infoObj[type] = 1;
        else infoObj[type] += 1;
    }
    const sortedArr = Object.entries(infoObj).sort((a, b) => b[1] - a[1]);
    for (let tcnt of sortedArr) {
        result += 1;
        target -= tcnt[1];
        if (target <= 0) break;
    }
    return result;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
