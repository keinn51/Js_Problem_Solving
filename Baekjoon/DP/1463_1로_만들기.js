const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().split("\n");

const target = Number(input[0]);

function solution(num) {
    if (num === 1 || num === 2) return 1;
    let share = Math.floor(num / 3);
    let remain = num % 3; //0, 1, 2
    if (remain === 1 || remain === 0) return share + remain;
    else return share + 2;
}

console.log(solution(target));
