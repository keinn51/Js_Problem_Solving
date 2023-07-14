function getErrorCount(map, startx, starty, completeMap1, completeMap2) {
    let count1 = 0,
        count2 = 0;
    const pastedMap1 = new Array(8).fill(0).map((_, i) => new Array(8).fill(0));
    const pastedMap2 = new Array(8).fill(0).map((_, i) => new Array(8).fill(0));

    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            pastedMap1[y][x] = map[y + starty][x + startx];
            pastedMap2[y][x] = map[y + starty][x + startx];
        }
    }

    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            if (completeMap1[y][x] !== pastedMap1[y][x]) {
                pastedMap1[y][x] = completeMap1[y][x];
                count1 += 1;
            }
        }
    }

    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            if (completeMap2[y][x] !== pastedMap2[y][x]) {
                pastedMap2[y][x] = completeMap2[y][x];
                count2 += 1;
            }
        }
    }

    return Math.min(count1, count2);
}

function solution(input) {
    const [N, M] = input
        .shift()
        .split(" ")
        .map((e) => +e); // N:y M:y
    const map = new Array(N).fill(0).map((_, i) => new Array(M).fill(0));
    const completeMap1 = new Array(8).fill(0).map((_, i) => new Array(8).fill(0));
    const completeMap2 = new Array(8).fill(0).map((_, i) => new Array(8).fill(0));

    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            if (y % 2 === 0) {
                if (x % 2 === 0) {
                    completeMap1[y][x] = "W";
                    completeMap2[y][x] = "B";
                } else {
                    completeMap1[y][x] = "B";
                    completeMap2[y][x] = "W";
                }
            } else {
                if (x % 2 === 0) {
                    completeMap1[y][x] = "B";
                    completeMap2[y][x] = "W";
                } else {
                    completeMap1[y][x] = "W";
                    completeMap2[y][x] = "B";
                }
            }
        }
    }

    for (let x = 0; x < M; x++) {
        for (let y = 0; y < N; y++) {
            map[y][x] = input[y][x];
        }
    }

    let min = Number.MAX_SAFE_INTEGER;

    for (let y = 0; y < N - 8 + 1; y++) {
        for (let x = 0; x < M - 8 + 1; x++) {
            min = Math.min(min, getErrorCount(map, x, y, completeMap1, completeMap2));
        }
    }

    console.log(min);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
