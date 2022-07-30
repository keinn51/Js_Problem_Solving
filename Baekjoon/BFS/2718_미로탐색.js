/*
https://www.acmicpc.net/problem/2178
*/

const input = require("fs").readFileSync("text.txt").toString().split("\n");
// N과 M은 각각 높이와 폭
const [N, M] = input[0].split(" ").map(function (a) {
  return parseInt(a);
});

// graph 는 map
let graph = new Array(N).fill([]).map(() => new Array(M));
// stamp 는 내가 걸어온 발자국을 나타내는 map
let stamp = new Array(N).fill([]).map(() => new Array(M).fill(false));
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) graph[i][j] = input[i + 1][j];
}

// 상하좌우를 갈 수 있도록 두 개의 배열 설정
const dx = [1, 0, -1, 0], dy = [0, 1, 0, -1];
const needVisitArr = [];

function bfs()
{
  let nx, ny;
  let x, y;
  graph[0][0] = 'V';
  stamp[0][0] = 1;
  needVisitArr.push([0, 0]);
  while (needVisitArr.length)
  {
    [x, y] = needVisitArr.shift();
    for (let i = 0; i < 4; i++)
    {
      nx = x + dx[i];
      ny = y + dy[i];
      if (0 <= nx && nx < N && 0 <= ny && ny < M)
        if (graph[nx][ny] !== 'V' && graph[nx][ny] === '1')
        {
          graph[nx][ny] = 'V';
          stamp[nx][ny] = stamp[x][y] + 1;
          needVisitArr.push([nx, ny]);
        }
    }
  }
  console.log(stamp);
  return stamp[N-1][M-1];
}

console.log(bfs());