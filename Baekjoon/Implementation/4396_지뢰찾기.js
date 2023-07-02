const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().trim().split("\n");

const height = Number(input.shift());

function solution(maps) {
    const bombMap = [];
    const playedMap = [];
    for (let i = 0; i < height; i++) {
        const bombLine = maps[i];
        const playedLine = maps[i + height];

        bombMap.push(bombLine.split(""));
        playedMap.push(playedLine.split(""));
    }
    const width = bombMap[0].length;
    const dx = [-1, 0, 1];
    const dy = [-1, 0, 1];
    let isBombed = false;
    for (let y = 0; y < height; y++) {
        const playedLine = playedMap[y];
        playedMap[y] = playedLine.map((str, x) => {
            if (str !== "x") return str;
            if (str === "x" && bombMap[y][x] === "*") {
                isBombed = true;
                return "*";
            }
            let count = 0;
            dx.forEach((_x) => {
                dy.forEach((_y) => {
                    const nx = x + _x;
                    const ny = y + _y;
                    if (nx < 0 || nx >= width) return;
                    if (ny < 0 || ny >= height) return;
                    if (bombMap[y + _y][x + _x] === "*") count += 1;
                });
            });
            return count;
        });
    }
    playedMap.forEach((line, y) => {
        let str = "";
        line.forEach((_str, x) => {
            if (isBombed === true && bombMap[y][x] === "*") str += "*";
            else str += playedMap[y][x];
        });
        console.log(str);
    });
}

solution(input);
