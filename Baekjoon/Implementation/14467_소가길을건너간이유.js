const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().trim().split("\n");

const gNUm = input.shift();

function solution(targets) {
    let res = 0,
        board = {};
    targets.forEach((target) => {
        const [cowNum, pos] = target.split(" ");
        if (board[cowNum] === undefined) {
            board[cowNum] = pos;
        } else {
            if (board[cowNum] !== pos) res += 1;
            board[cowNum] = pos;
        }
    });
    return res;
}

console.log(solution(input));
