const input = require("fs").readFileSync("text.txt").toString().split("\n");
const length = parseInt(input[0]),
  queue = [];
let answer = "";

function res() {
  for (let i = 1; i <= length; i++) {
    switch (input[i]) {
      case "pop":
        answer += (queue.length ? queue.shift() : "-1") + " ";
        break;
      case "size":
        answer += queue.length + " ";
        break;
      case "empty":
        answer += (!queue.length ? "1" : "0") + " ";
        break;
      case "front":
        answer += (queue.length ? queue[0] : "-1") + " ";
        break;
      case "back":
        answer += (queue.length ? queue[queue.length - 1] : "-1") + " ";
        break;
      default:
        queue.push(input[i].split(" ")[1]);
    }
  }
  return console.log(answer.trimEnd().split(" ").join("\n"));
}

res();

const t0 = performance.now();
for (let i = 0; i < 1000; i++) {
  res();
}
const t1 = performance.now();
console.log(t1 - t0, "milliseconds");
