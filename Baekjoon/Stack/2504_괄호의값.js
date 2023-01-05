const input = require("fs").readFileSync("text.txt").toString();

function getMultiplied(str) {
  //   console.log("getMultiplied", str);
  const braceCount = {
    small: 0,
    middle: 0,
  };
  let stackStr = "";
  if (str === "") return 1;
  for (let word of str) {
    switch (word) {
      case "(":
        braceCount["small"] += 1;
        break;
      case ")":
        braceCount["small"] -= 1;
        break;
      case "[":
        braceCount["middle"] += 1;
        break;
      case "]":
        braceCount["middle"] -= 1;
        break;
    }
    stackStr = stackStr.concat(word);
    if (braceCount["small"] === 0 && braceCount["middle"] === 0) {
      if (stackStr[0] === "") return 0;
      else if (stackStr[0] === "(") {
        return 2 * getMultiplied(stackStr.slice(1, stackStr.length - 1));
        // return 2;
      } else if (stackStr[0] === "[") {
        return 3 * getMultiplied(stackStr.slice(1, stackStr.length - 1));
        // return 3;
      }
      stackStr = "";
    }
  }
}

console.log(getMultiplied("[[]]"));
console.log(getMultiplied("()"));

let result = 0;

function getResult(string) {
  let nowStr = string;
  let stackStr = "";
  const stackArr = [];
  let idx = 0;
  const braceCount = {
    small: 0,
    middle: 0,
  };
  while (nowStr !== "") {
    switch (nowStr[idx]) {
      case "(":
        braceCount["small"] += 1;
        break;
      case ")":
        braceCount["small"] -= 1;
        break;
      case "[":
        braceCount["middle"] += 1;
        break;
      case "]":
        braceCount["middle"] -= 1;
        break;
    }
    stackStr = stackStr.concat(nowStr[idx]);
    if (braceCount["small"] === 0 && braceCount["middle"] === 0) {
      nowStr = nowStr.slice(idx + 1, nowStr.length);
      idx = 0;
      stackArr.push(stackStr);
      console.log("stackArr", stackArr);
      stackStr = "";
      console.log("nowStr", nowStr);
      continue;
    }
    idx++;
  }
  if (stackArr.length > 1) {
    stackArr.forEach((str) => getResult(str));
  } else {
    result += getMultiplied(stackArr[0]);
  }
}

getResult(input);
console.log("result", result);
