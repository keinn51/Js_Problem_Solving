// A는 안 비어 있다
// X, A : 1~100000
function solution(X, A) {
  let visitedObj = {},
    count = 0,
    returnVal = -1;

  for (let i = 0; i < A.length; i++) {
    if (!visitedObj[A[i]]) {
      count++;
      visitedObj[A[i]] = true;
    }
    if (count === parseInt(X, 10)) {
      returnVal = i;
      break;
    }
  }
  return returnVal;
}

// console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
// console.log(solution(5, [1, 3, 1, 4, 2, 3, 4, 4]));
// console.log(solution(2, [1]));
// console.log(solution(1, [0]));
// console.log(solution(5, [1, 2, 3, 4, 5]));
// console.log(
//   solution(
//     100000,
//     new Array(100000).fill(0).map((_, idx) => idx + 1),
//   ),
// );
// console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
