// https://www.acmicpc.net/problem/10026

const input = require("fs").readFileSync("text.txt").toString().split("\n");
const size = parseInt(input[0]);

const noBlindMap = new Array(size).map(() => new Array(size)),
  blindMap = new Array(size).map(() => new Array(size));
let dx = [1, 0, -1, 0], dy = [0, -1, 0, 1], noBlindRes = 0, blindRes = 0;
function BFS(x, y, map)
{
  let nx, ny, cnt = 0, mode = map[x][y], needVisitArr = [], a, b;
  if (mode !== 'V')
    cnt = 1;
  else
    return cnt;
  map[x][y] = 'V';
  needVisitArr.push([x, y]);
  while (needVisitArr.length)
  {
    [a, b] = needVisitArr.shift();
    for (let i = 0; i < 4; i++)
    {
      nx = a + dx[i];
      ny = b + dy[i];
      if (nx >= 0 && nx < size && ny >= 0 && ny < size && map[nx][ny] === mode)
      {
        map[nx][ny] = 'V';
        needVisitArr.push([nx, ny]);
      }
    }
  }
  return cnt
}

for (let i = 0; i < size; i++)
{
  noBlindMap[i] = input[i + 1].split('');
  blindMap[i] = input[i + 1].split('').map((e) => e === 'R' ? 'G' : e)
}

for (let i = 0; i < size; i++)
  for (let j = 0; j < size; j++)
  {
    noBlindRes += BFS(i, j, noBlindMap);
    blindRes += BFS(i, j, blindMap);
  }

console.log(noBlindRes, blindRes);