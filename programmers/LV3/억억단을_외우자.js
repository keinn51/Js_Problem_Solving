function getAppearance(num) {
    let res = 0;
    for (let i = 1; i * i <= num; i++) {
        if (num % i === 0) res += 1;
    }
    res *= 2;
    if (Number.isInteger(Math.sqrt(num))) res -= 1;
    return res;
}

function solution(e, starts) {
    const appearArr = [];
    const maxArr = new Array(e).fill(e);
    let max = e - 1;
    for (let i = 1; i <= e; i++) {
        const count = getAppearance(i);
        appearArr.push(count);
    }

    for (let i = e - 1; i >= 0; i--) {
        if (appearArr[i] >= appearArr[max]) max = i;
        maxArr[i] = max + 1;
    }

    return starts.map((start) => maxArr[start - 1]);
}

console.log(solution(8, [1, 3, 7]));
console.log(solution(10, [1, 3, 10]));
console.log(solution(12, [1, 3, 7]));
