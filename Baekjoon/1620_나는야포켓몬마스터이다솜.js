function solution(input) {
    const [N, M] = input
        .shift()
        .split(" ")
        .map((e) => +e);
    const numToAlpha = {},
        alphaToNum = {};
    for (let ii = 0; ii < N; ii++) {
        numToAlpha[ii + 1] = input[ii];
        alphaToNum[input[ii]] = ii + 1;
    }
    for (let ii = N; ii < N + M; ii++) {
        console.log(alphaToNum[input[ii]] || numToAlpha[input[ii]]);
    }
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
