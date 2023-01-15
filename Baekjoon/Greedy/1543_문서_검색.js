// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const entry = require("fs").readFileSync("text.txt").toString().trim().split("\n");

const solution = (checkedStr, checkingStr) => {
    let result = 0;
    while (checkedStr.indexOf(checkingStr) !== -1) {
        const startIndex = checkedStr.indexOf(checkingStr) + checkingStr.length;
        checkedStr = checkedStr.slice(startIndex, checkedStr.length);
        result += 1;
    }
    return result;
};

console.log(solution(...entry));
