const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().split("\n");
const targets = [];

input.shift();

for (let i = 0; i < input.length; i++) {
    if (i % 2 === 1)
        targets.push(
            input[i]
                .split(" ")
                .map((e) => +e)
                .sort((a, b) => a - b)
        );
}

console.log(targets);

function solution(arr) {
    let result = 0,
        startIdx;
    const dp = new Array(arr.length).fill(0);
    dp[1] = arr[0] + arr[1];
    dp[2] = Math.min(dp[1] + arr[2], arr[2] + arr[3]);
    if (dp[1] + arr[2] < arr[2])
        for (let i = 2; i < arr.length; i++) {
            dp[i] = dp[i - 1] + arr[i];
        }
    console.log(dp);
    for (let i = 1; i < dp.length; i++) {
        result += dp[i];
    }
    console.log(result);
}

for (let i = 0; i < targets.length; i++) {
    console.log(solution(targets[i]));
}
