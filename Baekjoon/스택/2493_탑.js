const input = require("fs").readFileSync("text.txt").toString().split("\n");
const topArr = input[1].split(" ").map((e) => parseInt(e, 10)),
  indexStack = [],
  resultStack = [];
let currNum = 0;

topArr.forEach((e, i) => {
  currNum = e;
  while (topArr[indexStack[indexStack.length - 1]] < currNum) indexStack.pop();
  if (!indexStack.length) resultStack.push(0);
  else resultStack.push(indexStack[indexStack.length - 1] + 1);
  indexStack.push(i);
});

console.log(resultStack.join(" "));
