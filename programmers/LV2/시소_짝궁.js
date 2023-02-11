// stack!!
function solution(weights) {
    weights.sort((a, b) => a - b);
    const combination = [1, 4 / 3, 3 / 2, 2];
    let result = 0;
    const matchStack = {};
    for (let i = 0; i < weights.length; i++) {
        if (matchStack[weights[i]] !== undefined) result += matchStack[weights[i]];
        combination.forEach((rate) => {
            const suppliedNum = weights[i] * rate;
            if (matchStack[suppliedNum] === undefined) matchStack[suppliedNum] = 1;
            else matchStack[suppliedNum] += 1;
        });
    }
    return result;
}

console.log(solution([100, 180, 360, 100, 270]));
