// 완전 탐색
function solution(n, k, enemy) {
    let round = 1;
    const idxStack = [];
    const limDep = k;

    function getResultFromArr(n, arr) {
        let round = 0;

        for (let item of arr) {
            round += 1;
            n -= item;
            if (n <= 0) {
                round -= 1;
                break;
            }
        }
        return round;
    }

    function iter(startIdx, currDep) {
        for (let idx = startIdx; idx < enemy.length - (limDep - currDep); idx++) {
            idxStack.push(idx);
            if (currDep !== limDep) iter(idx + 1, currDep + 1);
            else {
                const pastedArr = enemy.map((e) => +e);
                for (let t = 0; t < idxStack.length; t++) pastedArr[idxStack[t]] = 0;
                round = Math.max(round, getResultFromArr(n, pastedArr));
            }
            idxStack.pop();
        }
    }
    iter(0, 1);
    return round;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]), 5);
console.log(solution(4, 3, [2, 1, 2, 1, 7, 8, 9]), 5);
console.log(solution(2, 4, [3, 3, 3, 3]), 4);
