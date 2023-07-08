const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().trim().split("\n");

const [N, M, R] = input[0].split(" ").map(Number);
let arr = input.slice(1).map((_) => _.trim().split(" ").map(Number));

function rotate(arr) {
    let min = Math.min(N, M);

    let tempMap = new Array(N).fill(null).map((_) => new Array(M).fill(0));
    for (let limit = 0; limit < Math.floor(min / 2); limit++) {
        // 윗줄.
        for (let j = M - 2 - limit; j >= 0 + limit; j--)
            tempMap[0 + limit][j] = arr[0 + limit][j + 1];
        // 왼쪽.
        for (let j = 1 + limit; j < N - limit; j++) tempMap[j][0 + limit] = arr[j - 1][0 + limit];
        // 아래
        for (let j = 1 + limit; j < M - limit; j++)
            tempMap[N - 1 - limit][j] = arr[N - 1 - limit][j - 1];
        // 오른쪽.
        for (let j = N - 2 - limit; j >= 0 + limit; j--)
            tempMap[j][M - 1 - limit] = arr[j + 1][M - 1 - limit];
    }

    return tempMap;
}

function solution() {
    let answer = "";

    let modifiedArr = [...arr];
    for (let i = 0; i < R; i++) {
        modifiedArr = rotate(arr);
        arr = [...modifiedArr];
    }
    modifiedArr.forEach((e) => (answer += e.join(" ") + "\n"));

    return console.log(answer.trim());
}

solution();
