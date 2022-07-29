/*문제
두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에는 두 개의 자연수가 주어진다. 이 둘은 10,000이하의 자연수이며 사이에 한 칸의 공백이 주어진다.

출력
첫째 줄에는 입력으로 주어진 두 수의 최대공약수를, 둘째 줄에는 입력으로 주어진 두 수의 최소 공배수를 출력한다.

예제 입력 1 
24 18
예제 출력 1 
6
72 
*/

const input = require("fs").readFileSync("text.txt").toString().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);

function getDivisorObj(num) {
  const rtnObj = {};
  let i = 2;
  while (num !== 1) {
    if (num % i === 0) {
      rtnObj[i] ? (rtnObj[i] += 1) : (rtnObj[i] = 1);
      num /= i;
    } else i++;
  }
  return Object.assign({ 1: 1 }, rtnObj);
}

function getPowNum(obj) {
  return Object.entries(obj).reduce(
    (prev, curr) => prev * Math.pow(curr[0], curr[1]),
    1,
  );
}

function getResult(num1, num2) {
  const divisorObj1 = getDivisorObj(num1);
  const divisorObj2 = getDivisorObj(num2);
  const gcf = {},
    gcm = {};
  for (div in divisorObj1) {
    if (divisorObj2[div]) {
      gcf[div] = Math.min(divisorObj1[div], divisorObj2[div]);
      gcm[div] = Math.max(divisorObj1[div], divisorObj2[div]);
    } else gcm[div] = divisorObj1[div];
  }
  for (div in divisorObj2) {
    if (!gcm[div]) gcm[div] = divisorObj2[div];
  }
  console.log(getPowNum(gcf));
  console.log(getPowNum(gcm));
}

getResult(a, b);
