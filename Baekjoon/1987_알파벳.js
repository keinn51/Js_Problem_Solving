/**
 * IEFCJ
 * FHFKC
 * FFALF
 * HFGCF
 * HMCHH
 *
 * 01200
 * 12300
 * 20000
 * 00000
 * 00000
 */
function solution(input) {
    const [R, C] = input[0].split(" ").map(Number);
    const [_, ...arr] = input;
    const map = arr.map((l) => l.split(""));
    let count = 1;
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    const iter = (_x, _y, mirror, _count) => {
        count = Math.max(_count, count);
        mirror[map[_y][_x]] = true;

        for (let j = 0; j < 4; j++) {
            const nx = _x + dx[j];
            const ny = _y + dy[j];

            if (nx >= 0 && nx < C && ny >= 0 && ny < R && !mirror[map[ny][nx]]) {
                iter(nx, ny, { ...mirror }, _count + 1);
            }
        }
    };

    iter(0, 0, {}, 1);

    return console.log(count);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);

module.exports = solution;
