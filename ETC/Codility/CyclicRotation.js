function solution(A, K) {
  while (K > 0 && A.length > 0) {
    A.unshift(A.pop());
    K--;
  }
  return A;
}

console.log(solution([], 3));
