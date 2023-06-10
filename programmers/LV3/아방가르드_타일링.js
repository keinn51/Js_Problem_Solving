function checkFull(map, n) {
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < n; x++) {
            if (map[y][x] === false) return false;
        }
    }
    return true;
}

function solution(n) {
    const gmap = new Array(3).fill(null).map((_) => new Array(n).fill(false));
    let result = 0;
    function iter(map, gx, gy) {
        let isStart = false;
        for (let y = gy; y < 3; y++) {
            for (let x = 0; x < n; x++) {
                if (y >= gy && x >= gx) isStart = true;
                if (isStart === false) continue;
                if (map[y][x] === true) continue;
                if (x < n - 1 && map[y][x + 1] === false && y < 2 && map[y + 1][x] === false) {
                    map[y][x] = true;
                    map[y][x + 1] = true;
                    map[y + 1][x] = true;
                    if (x + 1 >= n) iter(map, 0, y + 1);
                    else iter(map, x + 1, y);
                    map[y][x] = false;
                    map[y][x + 1] = false;
                    map[y + 1][x] = false;
                }
                // left bottom
                if (x > 0 && map[y][x - 1] === false && y < 2 && map[y + 1][x] === false) {
                    map[y][x] = true;
                    map[y][x - 1] = true;
                    map[y + 1][x] = true;
                    if (x + 1 >= n) iter(map, 0, y + 1);
                    else iter(map, x + 1, y);
                    map[y][x] = false;
                    map[y][x - 1] = false;
                    map[y + 1][x] = false;
                }
                // top right
                if (x < n - 1 && map[y][x + 1] === false && y > 0 && map[y - 1][x] === false) {
                    map[y][x] = true;
                    map[y][x + 1] = true;
                    map[y - 1][x] = true;
                    if (x + 1 >= n) iter(map, 0, y + 1);
                    else iter(map, x + 1, y);
                    map[y][x] = false;
                    map[y][x + 1] = false;
                    map[y - 1][x] = false;
                }
                // top left
                if (x > 0 && map[y][x - 1] === false && y > 0 && map[y - 1][x] === false) {
                    map[y][x] = true;
                    map[y][x - 1] = true;
                    map[y - 1][x] = true;
                    if (x + 1 >= n) iter(map, 0, y + 1);
                    else iter(map, x + 1, y);
                    map[y][x] = false;
                    map[y][x - 1] = false;
                    map[y - 1][x] = false;
                }
                // top bottom
                if (y > 0 && map[y - 1][x] === false && y < 2 && map[y + 1][x] === false) {
                    map[y][x] = true;
                    map[y - 1][x] = true;
                    map[y + 1][x] = true;
                    if (x + 1 >= n) iter(map, 0, y + 1);
                    else iter(map, x + 1, y);
                    map[y][x] = false;
                    map[y - 1][x] = false;
                    map[y + 1][x] = false;
                }
                // left right
                if (x > 0 && map[y][x - 1] === false && x < n - 1 && map[y][x + 1] === false) {
                    map[y][x] = true;
                    map[y][x - 1] = true;
                    map[y][x + 1] = true;
                    if (x + 1 >= n) iter(map, 0, y + 1);
                    else iter(map, x + 1, y);
                    map[y][x] = false;
                    map[y][x - 1] = false;
                    map[y][x + 1] = false;
                }
            }
        }

        if (checkFull(map, n)) result += 1;
    }
    iter(gmap, 0, 0);
    return Math.floor(result % 1000000007);
}

console.log(solution(3));
