const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().trim().split("\n");

const gNum = input.shift();

function solution(len, nums) {
    const numArr = nums.split(" ").map((e) => +e);
    console.log(Math.min(...numArr), Math.max(...numArr));
}

for (let i = 0; i < input.length; i += 2) {
    solution(input[i], input[i + 1]);
}
