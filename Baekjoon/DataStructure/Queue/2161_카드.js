/**
 * 1234
 *
 * 234
 * 342
 *
 * 42
 * 24
 *
 * 4
 */
function solution(input) {
    const queue = new Array(Number(input[0])).fill(0).map((_, i) => i + 1);
    const stack = [];

    while (queue.length > 0) {
        queue.length > 0 && stack.push(queue.shift());
        queue.length > 0 && queue.push(queue.shift());
    }

    console.log(stack.join(" "));
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);

module.exports = solution;
