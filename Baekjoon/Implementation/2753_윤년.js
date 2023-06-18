const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = Number(require("fs").readFileSync(filename).toString().trim().split("\n")[0]);

function solution(num) {
    if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) return 1;
    return 0;
}

console.log(solution(input));
