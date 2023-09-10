// https://www.acmicpc.net/problem/1012

const input = require("fs").readFileSync("text.txt").toString().split("\n");
let allCount = parseInt(input[0]);
let index = 1;
let dx = [1, 0, -1, 0], dy = [0, -1, 0, 1];

function BFS(a,b, map, mapInfo, needVisitArr)
{
  let isCabage = 0;
  if (map[b][a] === '1')
    isCabage = 1;
  map[b][a] = 'V';
  needVisitArr.push([a, b]);
  while (needVisitArr.length)
  {
    let [x, y] = needVisitArr.shift();
    for (let i = 0; i < 4; i++)
    {
      let nx = x + dx[i], ny = y + dy[i];
      if (ny >= 0 && ny < mapInfo[1] && nx >= 0 && nx < mapInfo[0] && map[ny][nx] === '1' && isCabage)
      {
        map[ny][nx] = 'V';
        needVisitArr.push([nx, ny]);
      }
    }
  }
  return isCabage;
}

while (allCount--)
{
  let needVisitArr = [];
  let mapInfo = input[index].split(' ').map((e) => parseInt(e, 10))
  let map = new Array(mapInfo[1]).fill([]).map(() => new Array(mapInfo[0]).fill('0'));
  for (let i = 0; i < mapInfo[2]; i++) {
    let [x, y] = input[i + index + 1].split(' ');
    map[y][x] = '1';
  }
  let result = 0;

  for (let i = 0; i < mapInfo[0]; i++)
    for (let j = 0; j < mapInfo[1]; j++)
      result += BFS(i ,j, map, mapInfo,needVisitArr);

  console.log(result);
  index += (mapInfo[2] + 1);
}