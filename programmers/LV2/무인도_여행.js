let xLim, yLim;

const iter = (dx, dy, cnt, maps) => {
    let plusedNum = 0;
    if (maps[dy][dx] !== "X") {
        plusedNum = Number(maps[dy][dx]);
        maps[dy][dx] = "X";
        if (dx > 0 && maps[dy][dx - 1] !== "X") plusedNum += iter(dx - 1, dy, cnt, maps);
        if (dy < yLim - 1 && maps[dy + 1][dx] !== "X") plusedNum += iter(dx, dy + 1, cnt, maps);
        if (dx < xLim - 1 && maps[dy][dx + 1] !== "X") plusedNum += iter(dx + 1, dy, cnt, maps);
        if (dy > 0 && maps[dy - 1][dx] !== "X") plusedNum += iter(dx, dy - 1, cnt, maps);
    }
    return plusedNum;
};

function solution(maps) {
    xLim = maps[0].length;
    yLim = maps.length;
    const result = [];
    maps = maps.map((line) => line.split(""));

    for (let y = 0; y < yLim; y++) {
        for (let x = 0; x < xLim; x++) {
            if (maps[y][x] !== "X") result.push(iter(x, y, 0, maps));
        }
    }
    result.sort((a, b) => a - b);
    if (result.length === 0) return [-1];
    return result;
}

console.log(solution(["X591X", "X1X5X", "X231X", "1XXX1"]));
console.log(solution(["XXX", "XXX", "XXX"]));
