function solution(weights) {
    weights.sort((a, b) => a - b);
    const combination = [1, 3 / 2, 4 / 3, 2];
    let result = 0;
    for (let i = 0; i < weights.length; i++) {
        for (let j = i + 1; j < weights.length; j++) {
            // console.log(weights[j], weights[i]);
            if (weights[j] > weights[i] * 2) break;
            if (combination.indexOf(weights[j] / weights[i]) !== -1) result += 1;
        }
    }
    return result;
}

console.log(solution([100, 180, 360, 100, 270]));
