const input = require("fs")
    .readFileSync("text.txt")
    .toString()
    .trim()
    .split("\n")
    .map((e) => +e);

input.shift();

const solution = (expectArr) => {
    let result = 0;
    expectArr.sort((a, b) => a - b);
    expectArr.forEach((expect, index) => {
        result += Math.abs(Number(expect) - (index + 1));
    });
    return result;
};

console.log(solution(input));
