/*
문제
전쟁은 어느덧 전면전이 시작되었다. 결국 전투는 난전이 되었고, 우리 병사와 적국 병사가 섞여 싸우게 되었다. 그러나 당신의 병사들은 흰색 옷을 입고, 적국의 병사들은 파란색 옷을 입었기 때문에 서로가 적인지 아군인지는 구분할 수 있다. 문제는 같은 팀의 병사들은 모이면 모일수록 강해진다는 사실이다.

N명이 뭉쳐있을 때는 N2의 위력을 낼 수 있다. 과연 지금 난전의 상황에서는 누가 승리할 것인가? 단, 같은 팀의 병사들이 대각선으로만 인접한 경우는 뭉쳐 있다고 보지 않는다.

입력
첫째 줄에는 전쟁터의 가로 크기 N, 세로 크기 M(1 ≤ N, M ≤ 100)이 주어진다. 그 다음 두 번째 줄에서 M+1번째 줄에는 각각 (X, Y)에 있는 병사들의 옷색이 띄어쓰기 없이 주어진다. 모든 자리에는 병사가 한 명 있다. B는 파란색, W는 흰색이다. 당신의 병사와 적국의 병사는 한 명 이상 존재한다.

출력
첫 번째 줄에 당신의 병사의 위력의 합과 적국의 병사의 위력의 합을 출력한다.

예제 입력 1 
5 5
WBWWW
WWWWW
BBBBB
BBBWW
WWWWW
예제 출력 1 
130 65
*/

const input = require("fs")
  .readFileSync("text.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(function (a) {
  return parseInt(a);
});

let graph = new Array(M).fill([]).map(() => new Array(N));

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) graph[i][j] = input[i + 1][j];
}

let whiteCount = 1;
let BlueCount = 1;
let whiteSum = 0;
let blueSum = 0;
let isStop = false;

function iter(a, b, mode)
{
  let isRtn = true;
  graph[a][b] = "V";
  for (let i = a; i < M; i++) {
    for (let j = b; j < N; j++) {
      if (i + 1 < M && graph[i + 1][j] !== "V" && graph[i + 1][j] === mode) {
        isRtn = false;
        if(mode === 'W')
          whiteCount++;
        if(mode === 'B')
          BlueCount++;
        iter(i + 1, j,mode);
      }
      if (i - 1 >= 0 && graph[i - 1][j] !== "V" && graph[i - 1][j] === mode) {
        isRtn = false;
        if(mode === 'W')
          whiteCount++;
        if(mode === 'B')
          BlueCount++;
        iter(i - 1, j, mode);
      }
      if (j + 1 < N && graph[i][j + 1] !== "V" && graph[i][j + 1] === mode) {
        isRtn = false;
        if(mode === 'W')
          whiteCount++;
        if(mode === 'B')
          BlueCount++;
        iter(i, j + 1, mode);
      }
      if (j - 1 >= 0 && graph[i][j - 1] !== "V" && graph[i][j - 1] === mode) {
        isRtn = false;
        if(mode === 'W')
          whiteCount++;
        if(mode === 'B')
          BlueCount++;
        iter(i, j - 1, mode);
      }
    }
  }
}

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] !== 'V') {
      if (graph[i][j] === 'W')
      {
        iter(i, j, 'W');
        whiteSum += whiteCount ** 2;
        whiteCount = 1;
      }
      else if (graph[i][j] === 'B') {
        iter(i, j, 'B');
        console.log(BlueCount)
        blueSum += BlueCount ** 2;
        BlueCount = 1;
      }
      isStop = false;
    }
  }
}

console.log(whiteSum, blueSum);
console.log(graph);
