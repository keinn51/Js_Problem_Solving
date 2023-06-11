function solution(e, starts) {
    const appearArr = new Array(e).fill(0);
    const maxArr = new Array(e).fill(e);
    let max = e - 1;
    for (let i = 1; i <= e; i++) {
        for (let j = i; j <= e; j += i) {
            appearArr[j - 1] += 1;
        }
    }
    console.log(appearArr);

    for (let i = e - 1; i >= 0; i--) {
        if (appearArr[i] >= appearArr[max]) max = i;
        maxArr[i] = max + 1;
    }

    return starts.map((start) => maxArr[start - 1]);
}

console.log(solution(8, [1, 3, 7]));
console.log(solution(10, [1, 3, 10]));
console.log(solution(12, [1, 3, 7]));
