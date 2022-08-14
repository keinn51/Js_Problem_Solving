// 수학 식으로 바꿀 수 없는지를 생각하자

function solution(X, Y, D) {
  let jumpCnt = 0;
  jumpCnt = Math.ceil((Y - X) / D);
  return parseInt(jumpCnt, 10);
}

console.log(solution(10, 10, 30));
