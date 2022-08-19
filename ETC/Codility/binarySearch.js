function solution(K, M, A) {
  const pivotArr = [];
  let maxMin = -1;

  let splittedArr = [],
    pivotWidth = parseInt(A.length / K, 10);

  A.sort((a, b) => a - b);

  for (let i = 0; i < K * 2 - 2; i++) {
    splittedArr.push(A.slice(pivotWidth * i, pivotWidth * (i + 1)));
  }

  return splittedArr;
  // A를 정렬
  // K로 나누면서 pivorArr 설정
  // 만약 4라면 7개의 구분 arr가 생김
  // 0과 2n-2, 1과 2n-3의 값들을 더함
  // max가 가장 작을 때까지 각 피봇들 앞 뒤를 조건으로 본다
  // 각 pivotArr을 앞 뒤로 흔들어본다 만약 max가 maxMin보다 작으면 maxMin에 넣고 계속 돈다
}

console.log(solution(3, 5, [2, 1, 5, 1, 2, 2, 2]));
