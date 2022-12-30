// https://www.acmicpc.net/problem/10773

const input = require("fs").readFileSync("text.txt").toString().split("\n");
const length = parseInt(input[0]),
  sumArr = [];

for (let i = 1; i <= length; i++) {
  if (parseInt(input[i], 10)) sumArr.push(parseInt(input[i], 10));
  else sumArr.pop();
}

console.log(sumArr.reduce((prev, curr) => prev + curr, 0));
