// A는 안 비어 있음
// 1000000000 넘으면 -1
function solution(A) {
  let sum,
    count = 0;
  sum = A.filter((e) => parseInt(e, 10) !== 0).length;
  for (let i = 0; i < A.length; i++) {
    if (parseInt(A[i], 10) === 0) count += sum;
    else sum--;
  }
  if (count > 1000000000) return -1;
  return count;
}

// console.log(solution([0, 1, 0, 1, 1]), 5);
// console.log(solution([0, 1, 0, 1, 1, 1, 0, 1, 1]), 13);
// console.log(solution([0]), 0);
// console.log(solution([1]), 0);
// console.log(solution([0, 0, 0, 0]), 0);
// console.log(solution([1, 1, 1, 1]), 0);
// console.log(
//   solution(new Array(100000).fill(0).concat(new Array(100000).fill(1))),
// );
