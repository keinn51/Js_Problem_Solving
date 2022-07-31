// https://www.acmicpc.net/problem/5397

const input = require("fs").readFileSync("text.txt").toString().split("\n");
const size = parseInt(input[0]);

function getPassword(line) {
  let cursor = 0;
  let result = [];

  for (let i = 0; i < line.length; i++) {
    if (line[i] === "<") {
      if (cursor > 0) cursor--;
    } else if (line[i] === ">") {
      if (cursor < result.length) cursor++;
    } else if (line[i] === "-") {
      if (cursor !== 0) {
        result.splice(cursor - 1, 1);
        cursor--;
      }
    } else {
      result.splice(cursor, 0, line[i]);
      cursor++;
    }
  }
  return result.join("");
}

for (let i = 1; i <= size; i++) {
  console.log(getPassword(input[i]));
}
