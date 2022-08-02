// https://www.acmicpc.net/problem/5397

const input = require("fs").readFileSync("text.txt").toString().split("\n");
const size = parseInt(input[0]);

function getPassword(line) {
  let leftStack = [];
  let rightStack = [];

  for (let i = 0; i < line.length; i++) {
    if (line[i] === "<") {
      if (leftStack.length) rightStack.push(leftStack.pop());
    } else if (line[i] === ">") {
      if (rightStack.length) leftStack.push(rightStack.pop());
    } else if (line[i] === "-") {
      if (leftStack.length) leftStack.pop();
    } else {
      leftStack.push(line[i]);
    }
  }
  rightStack.reverse();
  return leftStack.concat(rightStack).join("");
}

for (let i = 1; i <= size; i++) {
  console.log(getPassword(input[i]));
}
