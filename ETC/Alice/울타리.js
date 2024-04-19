const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let index = 0;
let N, M, K;
let minx = Number.MAX_SAFE_INTEGER
let maxx = Number.MIN_SAFE_INTEGER
let miny = Number.MAX_SAFE_INTEGER
let maxy = Number.MIN_SAFE_INTEGER

rl.on('line', function (x) {
  const temp = x.split(' ')

  if (index === 0) {
      [N,M,K] = temp.map(Number)
  }
  else {
      const [x,y] = temp.map(Number)
      if (x > maxx) maxx = x
      if (x < minx) minx = x
      if (y > maxy) maxy = y
      if (y < miny) miny = y
  }
  if (index === K) {
      console.log(2*(maxx - minx + 2) + 2* (maxy-miny +2))
      rl.close()
  }
  index += 1
}).on('close', function () {
  process.exit();
});
