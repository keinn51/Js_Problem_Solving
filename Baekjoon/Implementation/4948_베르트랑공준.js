const inputArr = require("fs")
  .readFileSync("text.txt")
  .toString()
  .trim()
  .split("\n");

// ! 알고리즘 미숙지로 인한 실패

/**
 * * 개념 분석
 * 소수란, 1과 자기 자신으로 밖에 나누어지지 않는 수
 * - 1은 소수가 아니다
 * * 로직 생각
 * iterate하면서 소수 찾음. 이 때, 두 숫자의 중간까지만 돌아도 됨
 */

inputArr.pop();

// 소수 찾는 함수

function isSosu(num) {
  let currNum = 2;
  if (num === 1) return false;
  while (currNum <= Math.ceil(Math.sqrt(num))) {
    if (num % currNum === 0) return false;
    currNum++;
  }
  return true;
}

// iterate하면서 소수 찾음. 이 때, 두 숫자의 중간까지만 돌아도 됨

console.log(
  inputArr
    .map((num) => {
      let currNum = Number(num) + 1;
      const endNum = 2 * Number(num);
      let result = 0;
      while (currNum <= endNum) {
        if (isSosu(currNum)) result += 1;
        currNum += 1;
      }
      return result;
    })
    .join("\n")
);

// ! 너무 느림. ON3의 알고리즘을 가지고 있다.
