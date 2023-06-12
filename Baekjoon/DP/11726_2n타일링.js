const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().split("\n");

function solution(num) {
    const dp = new Array(num + 1).fill(0);
    dp[1] = BigInt(1);
    dp[2] = BigInt(2);
    for (let i = 3; i <= num; i++) {
        dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
    }
    return String(dp[num] % BigInt(10007));
}

console.log(solution(Number(input[0])));
