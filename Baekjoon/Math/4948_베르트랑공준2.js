const inputArr = require("fs")
  .readFileSync("text.txt")
  .toString()
  .trim()
  .split("\n");

// 에라토스테네스의 체 알고리즘 이해 및 적용

inputArr.pop();

// 소수 찾는 함수

function isSosu(num) {
  let currNum = 2;
  if (num === 1) return false;
  if (num === 2) return true;
  while (currNum <= Math.ceil(Math.sqrt(num))) {
    if (num % currNum === 0) return false;
    currNum++;
  }
  return true;
}

function countSosuBelowNum(num) {
  let currNum = num + 1;
  let count = 0;
  if (num === 1) return 1;
  while (currNum <= 2 * num) {
    if (isSosu(currNum)) count += 1;
    currNum++;
  }
  return count;
}

console.log(
  inputArr
    .map((num) => {
      return countSosuBelowNum(Number(num));
    })
    .join("\n")
);
