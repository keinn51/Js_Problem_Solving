const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
let map = require("fs")
    .readFileSync(filename)
    .toString()
    .trim()
    .split("\n")
    .map((line) => {
        const _arr = line
            .trim()
            .split(" ")
            .map((e) => +e);
        return [0, ..._arr];
    });

map = [new Array(20).fill(0), ...map];

function counter(map, x, y, direction) {
    /**
     * direction
     * 1 2 3
     * 4 5 6
     * 7 8 9
     */
    if (map[y][x] === 0) return 0;
    const kind = map[y][x];
    let count = 0;
    switch (direction) {
        case 1:
            x--;
            y--;
            while (x >= 1 && y >= 1 && map[y][x] === kind) {
                count += 1;
                x--;
                y--;
            }
            break;
        case 2:
            y--;
            while (y >= 1 && map[y][x] === kind) {
                count += 1;
                y--;
            }
            break;
        case 3:
            x++;
            y--;
            while (x <= 19 && y >= 1 && map[y][x] === kind) {
                count += 1;
                x++;
                y--;
            }
            break;
        case 4:
            x--;
            while (x >= 1 && map[y][x] === kind) {
                count += 1;
                x--;
            }
            break;
        case 6:
            x++;
            while (x <= 19 && map[y][x] === kind) {
                count += 1;
                x++;
            }
            break;
        case 7:
            x--;
            y++;
            while (x >= 1 && y <= 19 && map[y][x] === kind) {
                count += 1;
                x--;
                y++;
            }
            break;
        case 8:
            y++;
            while (y <= 19 && map[y][x] === kind) {
                count += 1;
                y++;
            }
            break;
        case 9:
            x++;
            y++;
            while (x <= 19 && y <= 19 && map[y][x] === kind) {
                count += 1;
                x++;
                y++;
            }
            break;
    }
    return count;
}

function solution(map) {
    for (let y = 1; y <= 19; y++) {
        for (let x = 1; x <= 19; x++) {
            if (counter(map, x, y, 1) === 0 && counter(map, x, y, 9) === 4) {
                console.log(`${map[y][x]}\n${y} ${x}`);
                return;
            }
            if (counter(map, x, y, 2) === 0 && counter(map, x, y, 8) === 4) {
                console.log(`${map[y][x]}\n${y} ${x}`);
                return;
            }
            if (counter(map, x, y, 3) === 0 && counter(map, x, y, 7) === 4) {
                console.log(`${map[y][x]}\n${y} ${x}`);
                return;
            }
            if (counter(map, x, y, 4) === 0 && counter(map, x, y, 6) === 4) {
                console.log(`${map[y][x]}\n${y} ${x}`);
                return;
            }
        }
    }
    console.log("0");
}

solution(map);
