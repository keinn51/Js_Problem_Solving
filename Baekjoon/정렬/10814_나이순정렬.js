const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

// 나이 증가 순, 같으면 등록순

input.shift();

input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);

console.log(input.join("\n"));