function solution(A) {
  let sum = A.reduce((prev, curr) => prev + parseInt(curr, 10), 0),
    sumArr = [],
    result = 100000;
  for (let i = 0; i < A.length; i++) {
    if (i === 0) sumArr.push(parseInt(A[i], 10));
    else sumArr.push(parseInt(A[i] + sumArr[i - 1], 10));
  }
  for (let i = 0; i < A.length - 1; i++) {
    result = Math.min(Math.abs(2 * sumArr[i] - sum), result);
  }
  return result;
}

// console.log(solution([3, 3]), 0);
// console.log(solution([3, 1]), 2);
// console.log(solution([3, 3, -1, 0]), 1);
// console.log(solution([3, 1000, 1000]), 3);
// console.log(solution([3, -1000, 1000]), 3);
// console.log(solution([3, 5, 6, 7, 8, 9, 10]), 6);
// console.log(solution([3, 2]), 1);
