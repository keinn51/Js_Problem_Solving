//  https://www.acmicpc.net/problem/2438

const input = require("fs").readFileSync("text.txt").toString().split("\n");
const a = parseInt(input[0]);

for (let i = 1; i <= a; i++)
  console.log('*'.repeat(i));