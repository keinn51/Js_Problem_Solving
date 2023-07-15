const input = require("fs").readFileSync("text.txt").toString().split("\n");
const length = parseInt(input[0]),
  startStack = new Array(length)
    .fill(0)
    .map((_, i) => i + 1)
    .reverse(),
  middleStack = [],
  resultStack = [],
  goalStack = [];
let answer = "";

for (let i = 1; i <= length; i++) goalStack.push(parseInt(input[i], 10));

while (resultStack.length !== length) {
  if (
    !middleStack.length ||
    middleStack[middleStack.length - 1] !== goalStack[resultStack.length]
  ) {
    if (startStack.length) {
      middleStack.push(startStack.pop());
      answer += "+\n";
    } else {
      console.log("NO");
      break;
    }
  } else {
    resultStack.push(middleStack.pop());
    answer += "-";
    if (resultStack.length !== length) answer += "\n";
  }
}

if (resultStack.length === length) console.log(answer);
