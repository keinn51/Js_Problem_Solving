/**
 * 전형적인 dfs문제
 *
 */
function solution(input) {
    const [N, ...arr] = input;
    const num = Number(N);

    const map = arr.map((l) => l.split(" ").map(Number));

    let result = 1;
    let maxLength = Number.MIN_SAFE_INTEGER;

    for (let y = 0; y < num; y++) {
        for (let x = 0; x < num; x++) {
            maxLength = Math.max(map[y][x], maxLength);
        }
    }

    const iter = (_x, _y, _map, _height) => {
        const _value = _map[_y][_x];
        _map[_y][_x] = null;
        if (_value === null || _value <= _height) return 0;

        if (_x > 0 && _map[_y][_x - 1] !== null) iter(_x - 1, _y, _map, _height);
        if (_y > 0 && _map[_y - 1][_x] !== null) iter(_x, _y - 1, _map, _height);
        if (_x < num - 1 && _map[_y][_x + 1] !== null) iter(_x + 1, _y, _map, _height);
        if (_y < num - 1 && _map[_y + 1][_x] !== null) iter(_x, _y + 1, _map, _height);

        return 1;
    };

    for (let i = 1; i < maxLength; i++) {
        let _result = 0;
        const _map = JSON.parse(JSON.stringify(map));
        for (let y = 0; y < num; y++) {
            for (let x = 0; x < num; x++) {
                _result += iter(x, y, _map, i);
            }
        }
        result = Math.max(_result, result);
    }

    console.log(result.toString());
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split(`\n`)
);

module.exports = solution;
