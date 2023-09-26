/**
 * 5
 * 1 1 1 6 0
 * 2 7 8 3 1
 *
 * 0 1 1 1 6
 * 8 7 3 2 1
 *
 *
 */
function solution(input) {
    const N = Number(input[0]);
    const A = input[1].split(" ").map(Number);
    const B = input[2].split(" ").map(Number);
    let _res = 0;

    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    for (let i = 0; i < N; i++) {
        _res += A[i] * B[i];
    }

    console.log(_res);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
