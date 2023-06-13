const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs")
    .readFileSync(filename)
    .toString()
    .trim()
    .split("\n")[1]
    .split(" ")
    .map((e) => +e);

/**
 * 10 30 10 20 20 10 50 40 20 30 5 30
 *  1  1  2  2  2  3 1  2   3  3 4 3
 * 1. 자신보다 최대값이 배열의 이전 인덱스에 없으면 1
 * 2. 배열의 이전 요소 중 자신보다 큰 값 중에서 dp가 최대인 값에 +1
 */

function solution(arr) {
    const dp = new Array(1001).fill(0);
    for (let i = 0; i < arr.length; i++) {
        const now = arr[i];
        const upper = arr.slice(0, i).filter((_num) => _num > now);
        if (upper.length === 0) dp[now] = 1;
        else dp[now] = Math.max(...upper.map((_num) => dp[_num])) + 1;
    }
    return Math.max(...dp);
}

console.log(solution(input));
