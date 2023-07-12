function solution(input) {
    input = input.map((e) => +e);
    const count = input.shift();
    let max = Number.MIN_SAFE_INTEGER;
    input.sort((a, b) => a - b);
    for (let ii = 0; ii < count; ii++) {
        max = Math.max(max, (count - ii) * input[ii]);
    }
    console.log(max);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
