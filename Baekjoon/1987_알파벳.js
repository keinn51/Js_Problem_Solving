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
    const vmap = arr.map((_) => new Array(C).fill(0));
    let needVisit = [[0, 0]];
    let count = 0;
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const mirror = {};

    console.log(map);

    while (needVisit.length > 0) {
        let newTarget = [];
        for (let i = 0; i < needVisit.length; i++) {
            const [_x, _y] = needVisit[i];
            for (let j = 0; j < 4; j++) {
                const nx = _x + dx[j];
                const ny = _y + dy[j];

                if (
                    nx >= 0 &&
                    nx < C &&
                    ny >= 0 &&
                    ny < R &&
                    !mirror[map[ny][nx]] &&
                    vmap[ny][nx] === 0
                ) {
                    mirror[map[ny][nx]] = true;
                    vmap[ny][nx] = 1;
                    console.log(nx, ny, vmap.join("\n"));
                    newTarget.push([nx, ny]);
                }
            }
        }
        needVisit = [...newTarget];
        newTarget = null;
        count += 1;
    }

    console.log(vmap, count);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);

module.exports = solution;
