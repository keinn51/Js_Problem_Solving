const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().trim().split("\n");

let [N, M, R] = input
    .shift()
    .split(" ")
    .map((e) => +e);

const map = input.map((line) => line.split(" ").map((e) => +e));

// console.log(`kyungsle`, map);

/**
4 4 2
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16
 */

function solution() {
    let dy = 0,
        rx = 0,
        uy = N - 1,
        lx = M - 1;
    let temp = null;
    let count = R;
    let iter = 0;
    while (count > 0) {
        console.log(`dy rx uy lx`, dy, rx, uy, lx);
        for (let d = 0; d + 1 < N - 2 * iter; d++) {
            temp = map[dy + d][rx];
            map[dy + d][rx] = map[dy + d + 1][rx];
            map[dy + d + 1][rx] = temp;
        }
        console.log(`map`, map);
        for (let r = 0; r + 1 < M - 2 * iter; r++) {
            temp = map[uy][rx + r];
            map[uy][rx + r] = map[uy][rx + r + 1];
            map[uy][rx + r + 1] = temp;
        }
        console.log(`map`, map);
        for (let u = 0; u + 1 < N - 2 * iter; u++) {
            temp = map[uy - u][lx];
            map[uy - u][lx] = map[uy - u - 1][lx];
            map[uy - u - 1][lx] = temp;
        }
        console.log(`map`, map);
        for (let l = 0; l + 1 < M - 2 * iter; l++) {
            temp = map[dy][lx - l];
            map[dy][lx - l] = map[dy][lx - l - 1];
            map[dy][lx - l - 1] = temp;
        }
        console.log(`map`, map);
        count--;
        iter++;
        dy = iter;
        rx = iter;
        uy = N - 1 - iter;
        lx = M - 1 - iter;
    }
    console.log(`map`, map);
}

solution();
