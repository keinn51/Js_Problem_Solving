/* 
문제
양의 정수 n이 주어졌을 때, 이를 이진수로 나타냈을 때 1의 위치를 모두 찾는 프로그램을 작성하시오. 최하위 비트(least significant bit, lsb)의 위치는 0이다.

입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, n이 주어진다. (1 ≤ T ≤ 10, 1 ≤ n ≤ 106)

출력
각 테스트 케이스에 대해서, 1의 위치를 공백으로 구분해서 줄 하나에 출력한다. 위치가 낮은 것부터 출력한다.
*/

let input = require("fs").readFileSync("text.txt").toString().split("\n");
var a = parseInt(input[0]);
let b = [];

for (i = 1; i <= a; i++) {
  b.push(parseInt(input[i]));
}

for (i = 0; i < b.length; i++) {
  let j = 0;
  let res_arr = [];
  let res_str;
  let num = b[i];
  let quo;
  while (Math.pow(2, j) <= num) j++;
  while (j >= 0) {
    quo = num / Math.pow(2, j);
    num = num % Math.pow(2, j);
    if (parseInt(quo, 10)) res_arr.push(j);
    j--;
  }
  res_arr.reverse();
  res_str = res_arr.join(" ");
  if (i !== b.length - 1) res_str.concat("\n");
  console.log(res_str);
}
