const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs")
    .readFileSync(filename)
    .toString()
    .split("\n")
    .map((e) => +e);

input.shift();

function solution(arr) {
    let result = Number.MIN_SAFE_INTEGER;
    const len = arr.length;
    function iter(idx, acc, pers) {
        const now = acc + arr[idx];
        if (idx === len - 1) {
            result = Math.max(result, now);
            return;
        }
        if (idx + 1 < len && pers < 2) {
            iter(idx + 1, now, pers + 1);
        }
        if (idx + 2 < len) {
            iter(idx + 2, now, 1);
        }
    }
    iter(0, 0, 1);
    console.log(result);
}

solution(input);
