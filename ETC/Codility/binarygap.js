// 2진수 1 사이에서 가장 긴 길이를 반환
// 만약 사이의 길이가 없다면 0 : 기본이 0

function solution(N) {
  let n = 0,
    binaryArr = [],
    gap = 0,
    gapTemp = 0;
  while (N / 2 ** n >= 1) n++;
  n--;
  while (n >= 0) {
    binaryArr.push(Math.floor(N / 2 ** n));
    N = N % 2 ** n;
    n--;
  }
  if (binaryArr.filter((e) => e === 1).length > 1) {
    binaryArr.forEach((elem, idx) => {
      if (idx !== 0) {
        if (elem === 0) gapTemp++;
        if (elem === 1) {
          gap = Math.max(gap, gapTemp);
          gapTemp = 0;
        }
      }
    });
  }
  return gap;
}

solution(1041);
