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
// console.log(getMultiplied("[]"));
// console.log(getMultiplied(""));
