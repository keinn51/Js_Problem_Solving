function solution(A) {
  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    if (A[i] < 0) continue;
    if (i < A.length - 2 && A[i] + A[i + 1] > A[i + 2]) return 1;
  }
  return 0;
}

console.log(solution([10, 2, 5, 1, 8, 20]));
console.log(solution([10, 50, 5, 1]));
