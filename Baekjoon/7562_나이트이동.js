/**
 * N 0 0 0 0 0 0 0
 * 0 0 0 0 0 0 0 0
 * 0 0 0 0 0 0 0 0
 * 0 0 0 0 0 0 0 0
 * 0 0 0 0 0 0 0 0
 * 0 0 0 0 0 0 0 0
 * 0 0 0 0 0 G 0 0
 * 0 0 0 0 0 0 0 0
 *
 * 2칸 이상 벗어나는 것은 범위제한 하고 전체탐색
 *
 */

function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}

const getResult = (mapLen, np, gp) => {
    const map = new Array(mapLen).fill([]).map((_) => new Array(mapLen).fill(0));
    const [npx, npy] = np;
    const [gpx, gpy] = gp;
    const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
    const dy = [-1, -2, -2, -1, 1, 2, 2, 1];

    let count = Number.MAX_SAFE_INTEGER;

    // console.log(mapLen, np, gp);

    map[npy][npx] = "N";
    map[gpy][gpx] = "G";

    const iter = (_map, _x, _y, _count) => {
        console.log(map.join("\n") + _count + "\n");
        sleep(1500);
        if (_x === gpx && _y === gpy) {
            count = Math.min(_count, count);
            return;
        }

        for (let i = 0; i < 8; i++) {
            const newX = _x + dx[i];
            const newY = _y + dy[i];
            if (
                newX >= Math.max(Math.min(npx - 2, gpx - 2), 0) &&
                newX <= Math.min(Math.max(npx + 2, gpx + 2), mapLen - 1) &&
                newY >= Math.max(Math.min(npy - 2, gpy - 2), 0) &&
                newY <= Math.min(Math.max(npy + 2, gpy + 2), mapLen - 1) &&
                map[newY][newX] === 0
            ) {
                if (!(_x === npx && _y === npy) && !(_x === gpx && _y === gpy)) {
                    _map[_y][_x] = "V";
                }
                iter(_map, newX, newY, _count + 1);
                if (!(_x === npx && _y === npy) && !(_x === gpx && _y === gpy)) {
                    _map[_y][_x] = 0;
                }
            }
        }
    };

    iter(map, npx, npy, 0);

    console.log(count);
};

function solution(input) {
    const [N, ...arr] = input;
    const num = Number(N);

    for (let i = 0; i < arr.length; i += 3) {
        getResult(
            Number(arr[i]),
            arr[i + 1].split(" ").map(Number),
            arr[i + 2].split(" ").map(Number)
        );
    }
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);

module.exports = solution;
