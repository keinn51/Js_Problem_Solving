const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().trim().split("\n");
/**
 * 1. q가 들어오면 일단 새로운 배열에 넣어야 함
 * 2. quack 순서대로 들어오는 것에 집중
 *      즉, a가 들어오면 마지막 값이 u인 곳에다가 넣어주면됨
 * 3. 다 돌았을 때 length가 5가 아닌 곳이 있다거나, 배열 길이의 총합이 입력과 맞지 않으면 -1
 *
 * * +) 돌다가 이미 울음소리가 끝난 오리가 있다면, 그 오리가 한 번더 울 수도 있음
 */

function solution(str) {
    const checkArr = [];
    let minDuck = 0;
    const idxBoard = { q: 0, u: 1, a: 2, c: 3, k: 4 };
    for (let idx in str) {
        const word = str[idx];
        if (word === "q") checkArr.push(["q"]);
        else {
            // 새로운 문자가 들어갈 곳은 어디인가
            const tIdx = checkArr.findIndex(
                (stack) => idxBoard[stack[stack.length - 1]] === idxBoard[word] - 1
            );
            // 기존 배열의 어딘가에는 반드시 들어가야 함
            if (tIdx === -1) return -1;
            checkArr[tIdx].push(word);
            if (checkArr[tIdx].length === 5) checkArr.splice(tIdx, 1);
        }
        minDuck = Math.max(minDuck, checkArr.length);
    }
    if (checkArr.length > 0) return -1;
    return minDuck;
}

console.log(solution(input[0]));
