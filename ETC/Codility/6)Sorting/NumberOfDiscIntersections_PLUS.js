// for을 두 번 쓴다고 해서 O(N2) 가 아니다.
// 문제를 잘 읽어야겠군..

function solution(A) {
  const circleArr = [];
  let returnVal = 0;

  for (let i = 0; i < A.length; i++) {
    circleArr.push({
      lower: i - A[i],
      upper: i + A[i],
    });
  }

  circleArr.sort((a, b) => a.lower - b.lower);

  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (returnVal > 10000000) return -1;
      if (circleArr[j].lower > circleArr[i].upper) break;
      else if (
        circleArr[j].lower >= circleArr[i].lower &&
        circleArr[j].lower <= circleArr[i].upper
      ) {
        returnVal++;
      }
    }
  }

  return returnVal;
}

console.log(solution([1, 5, 2, 1, 4, 0]));
