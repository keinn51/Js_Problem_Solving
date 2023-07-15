// https://www.acmicpc.net/problem/1158

const input = require("fs").readFileSync("text.txt").toString().split(" ");
const length = parseInt(input[0]),
  jump = parseInt(input[1]) - 1,
  result = [];
let arr = new Array(length).fill(0).map((_, i) => i + 1),
  start = 0;

for (let i = 0; i < length; i++) {
  result.push(arr.splice((start + jump) % arr.length, 1)[0]);
  start = (start + jump) % (arr.length + 1);
}

console.log("<" + result.join(", ") + ">");
