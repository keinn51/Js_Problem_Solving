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
    const mirror = new Array(26).fill(false);

    mirror[map[0][0].charCodeAt() - 65] = true;

    const iter = (_x, _y, _count) => {
        count = Math.max(_count, count);

        for (let j = 0; j < 4; j++) {
            const nx = _x + dx[j];
            const ny = _y + dy[j];

            if (
                nx >= 0 &&
                nx < C &&
                ny >= 0 &&
                ny < R &&
                mirror[map[ny][nx].charCodeAt() - 65] === false
            ) {
                const m_idx = map[ny][nx].charCodeAt() - 65;
                mirror[m_idx] = true;
                iter(nx, ny, _count + 1);
                mirror[m_idx] = false;
            }
        }
    };

    iter(0, 0, 1);

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
