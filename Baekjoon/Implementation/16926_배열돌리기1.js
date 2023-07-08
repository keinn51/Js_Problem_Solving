const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().trim().split("\n");

let [N, M, R] = input
    .shift()
    .split(" ")
    .map((e) => +e);

const map = input.map((line) => line.split(" ").map((e) => +e));

console.log(`kyungsle`, map);

/**
4 4 2
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16
 */

function solution() {
    // TOOD use stack !!!
    // not have to assign lt... the first line, it can be in for
    let lt = [0, 0],
        rt = [M - 1, 0],
        lb = [0, N - 1],
        rb = [M - 1, N - 1];
    let width = rt[0] - lt[0] + 1;
    let height = lb[1] - lt[1] + 1;
    let ltv = map[lt[1]][lt[0]],
        lbv = map[lb[1]][lb[0]],
        rbv = map[rb[1]][rb[0]],
        rtv = map[rt[1]][rt[0]];
    let temp = null;
    for (let right = 0; right < width - 1; right++) {
        temp = map[lt[1]][lt[0] + right];
        map[lt[1]][lt[0] + right + 1] = map[rt[1]][lt[0] + right];
    }
    for (let down = 0; down < height - 1; down++) {
        map[rt[1] + down + 1][rt[0]] = map[rt[1] + down][rt[0]];
    }
    for (let left = 0; left < width - 1; left++) {
        map[rb[1]][rb[0] - left - 1] = map[rb[1]][rb[0] - left];
    }
    for (let up = 0; up < height - 1; up++) {
        map[lb[1] - up - 1][lb[0]] = map[lb[1] - up][lb[0]];
    }
    console.log(`kyungsle`, map);
}

solution();
