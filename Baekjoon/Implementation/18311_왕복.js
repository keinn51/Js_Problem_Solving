const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().trim().split("\n");

function solution() {
    let [N, K] = input //N5 K28
        .shift()
        .split(" ")
        .map((e) => +e);

    const distances = input
        .shift()
        .split(" ")
        .map((e) => +e);

    for (let i = 0; i < N; i++) {
        if (K >= distances[i]) K -= Number(distances[i]);
        else return i + 1;
    }
    for (let i = N - 1; i >= 0; i--) {
        if (K >= distances[i]) K -= Number(distances[i]);
        else return i + 1;
    }
}

console.log(solution());
