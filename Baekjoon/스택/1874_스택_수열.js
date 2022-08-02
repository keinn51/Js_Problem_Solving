const input = require("fs").readFileSync("text.txt").toString().split("\n");
const length = parseInt(input[0]),
  startStack = [],
  middleStack = [],
  resultStack = [];

for (let i = 1; i <= length; i++) startStack.push(parseInt(input[i], 10));

console.log(startStack);
