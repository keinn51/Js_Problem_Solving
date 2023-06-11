const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().split("\n");
const num = Number(input[0]); //0~90

function solution(num) {
    const dp = new Array(num + 1).fill(0);
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= num; i++) {
        dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
    }
    return String(dp[num]);
}

console.log(solution(num));
