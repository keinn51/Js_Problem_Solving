// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
    .readFileSync("text.txt")
    .toString()
    .trim()
    .split("\n")
    .map((e) => +e);

input.shift();

const solution = (expectArr) => {
    let result = 0;
    expectArr.sort();
    console.log("expectArr", expectArr);
    expectArr.forEach((expect, index) => {
        result += Math.abs(expect - (index + 1));
    });
    return result;
};

console.log(solution(input));

console.log(solution([5, 5, 5, 5, 5]));
console.log(solution([2, 2, 2, 2, 2]));
console.log(solution([1]));
console.log(solution([1, 1, 1, 1, 1]));
console.log(solution([4, 2, 3, 1]));
console.log(solution([4, 2, 3, 3]));
