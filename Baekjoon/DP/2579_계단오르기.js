const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs")
    .readFileSync(filename)
    .toString()
    .split("\n")
    .map((e) => +e);

const count = input.shift();

function solution(input, count) {
    const dp = Array(input.length).fill(0);
    dp[0] = input[0];
    dp[1] = input[0] + input[1];
    dp[2] = Math.max(input[0], input[1]) + input[2];

    for (let i = 3; i < input.length; i++) {
        dp[i] = Math.max(dp[i - 2] + input[i], dp[i - 3] + input[i - 1] + input[i]);
    }

    return dp[count - 1];
}

console.log(solution(input, count));
