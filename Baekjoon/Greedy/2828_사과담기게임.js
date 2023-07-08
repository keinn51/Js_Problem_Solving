const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().trim().split("\n");

const [N, M] = input
    .shift()
    .split(" ")
    .map((e) => +e);
const appleCnt = Number(input.shift());

function solution(positions) {
    let basketLeftIdx = 0;
    const basketWidth = Number(M);
    let count = 0;
    for (let idx in positions) {
        const targetIdx = Number(positions[idx]) - 1;
        while (targetIdx > basketLeftIdx + basketWidth - 1) {
            count += 1;
            basketLeftIdx += 1;
        }
        while (targetIdx < basketLeftIdx) {
            count += 1;
            basketLeftIdx -= 1;
        }
    }
    return count;
}

console.log(solution(input.map((e) => +e)));
