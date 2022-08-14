// A 는 비어있지 않다.

function solution(A) {
  let appearedObj = {};
  for (let i = 0; i < A.length; i++) {
    if (A[i] > A.length) return 0;
    if (appearedObj[A[i]]) return 0;
    else appearedObj[A[i]] = true;
  }
  return 1;
}

// console.log(solution([4, 1, 3, 2]), 1);
// console.log(solution([1]), 1);
// console.log(solution([4, 3, 2]), 0);
// console.log(solution([4, 1, 3, 5]), 0);
// console.log(solution([4, 1, 3, 1]), 0);
// console.log(solution([4, 1]), 0);
// console.log(solution(new Array(100000).fill(0).map((_, i) => i + 1)), 1);

/*

function solution(A) {
  let appearedObj = {};
  for (let i = 0; i < A.length; i++) {
    if (!appearedObj[A[i]]) appearedObj[A[i]] = true;
  }
  // console.log(appearedObj);
  for (let i = 1; i <= A.length; i++) {
    if (!appearedObj[i]) return 0;
  }
  return 1;
}
*/
