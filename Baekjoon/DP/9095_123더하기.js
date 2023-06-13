const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs")
    .readFileSync(filename)
    .toString()
    .trim()
    .split("\n")
    .map((e) => +e);

input.shift();

function solution(arr) {
    const dp = new Array(11).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    for (let i = 4; i < 11; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    arr.forEach((_num) => console.log(dp[_num]));
}

solution(input);
