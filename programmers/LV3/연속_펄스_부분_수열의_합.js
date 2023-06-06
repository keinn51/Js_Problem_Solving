function solution(sequence) {
    let sumArr = [0];
    for (let i = 0; i < sequence.length; i++) {
        if (i % 2) {
            sumArr.push(sumArr[i] - sequence[i]);
        } else {
            sumArr.push(sumArr[i] + sequence[i]);
        }
    }
    let checkArr = [...sumArr].sort((a, b) => a - b);
    let min = sumArr.indexOf(checkArr[0]);
    let max = sumArr.indexOf(checkArr[checkArr.length - 1]);
    return Math.abs(sumArr[max] - sumArr[min]);
}

console.log(solution([2, 3, -6, 1, 3, -1, 2, 4]));
