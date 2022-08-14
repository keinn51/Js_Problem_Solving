function solution(A) {
  let returnVal;
  const appearObj = {};
  A.forEach((e) => {
    if (appearObj[e]) appearObj[e]++;
    else appearObj[e] = 1;
  });
  for (let i in appearObj) {
    if (appearObj[i] % 2 === 1) returnVal = i;
  }
  return returnVal;
}

console.log(solution([2, 2]));
