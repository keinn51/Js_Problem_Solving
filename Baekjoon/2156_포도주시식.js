/**
 * 연속 두 개를 골라서 최대한으로 가져갈 수 있는 것을 체크하기
 *
 * 6, 10, 13, 9, 8, 1
 *
 * 300 300 100 1 300 300 1 1 300 300
 *
 * 300 300 200 300 1 1 300 1 300 300
 *
 * 6 10 / 9 8  => 33
 * 10 13 / 8 1  => 31
 *
 * 6 16 29 38 46 47
 * 10과 6을 선택하면 9-8 혹은 8-1을 선택 가능 13 9 는 선택 불가
 * 근데.. 하나만 선택할 수도 있지
 *
 * 완탐인걸까? dp인걸까
 *
 * 6 10 13 중에서 보자면
 * 6 13 : 19
 * 6 10 : 16
 * 10 13 : 23
 *
 * 9 8 1 중에서 보자면
 * 9 1 : 10
 * 9 8 : 17
 * 8 1 : 9
 */
function solution(input) {
    const [n, ...wine] = input;
    if (n === 1) return wine[0];
    else if (n === 2) return wine[0] + wine[1];
    const dp = new Array(n).fill(0);
    dp[1] = wine[0];
    dp[2] = wine[0] + wine[1];
    for (let i = 3; i <= n; i++) {
        dp[i] = Math.max(dp[i - 3] + wine[i - 2] + wine[i - 1], dp[i - 2] + wine[i - 1], dp[i - 1]);
    }
    console.log(dp[n]);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
        .map(Number)
);

module.exports = solution;
