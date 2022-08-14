// 테스트 케이스에 따라서 순서를 더 잘 짜보자

function solution(A) {
  A = A.map((e) => parseInt(e, 10)).sort((a, b) => a - b);
  if (A.length === 0) return 1;
  if (A.length === 1) {
    if (parseInt(A[0], 10) === 1) return 2;
    else return 1;
  }
  for (let i = 0; i < A.length; i++) {
    if (parseInt(A[i], 10) !== i + 1) return i + 1;
    if (i === A.length - 1) return parseInt(A[i] + 1, 10);
  }
}

// console.log(solution([2]));
// console.log(solution([1]));
// console.log(solution([]));
// console.log(solution([2, 3, 1, 5]));
// console.log(solution([3]));
// console.log(solution([1, 2]));
// console.log(solution([1, 3]));
// console.log(solution([2, 3]));
// console.log(solution(new Array(100000).fill(0).map((_, idx) => idx + 1)));
